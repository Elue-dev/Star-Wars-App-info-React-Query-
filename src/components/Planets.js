import { useQuery } from 'react-query'
import { useState  } from 'react'
import Planet from './Planet'

// make the function you passed to useQuery go out and grab the data
const fetchPlanets = async (page) => {
    const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
    return response.json() //gets us the data
} 

export default function Planets() { 
    const [ page, setPage ] = useState(1)
    const { data, status } = useQuery(['planets', page], ()=>fetchPlanets(page)) //first argument is a key, second is an asynchronous function to go grab that data
    //data is the thing we got from the api call above
    //status is whether there was an error or it  was successful

    return (
        <div>
            <h1>Planets</h1>

            <button onClick={()=> setPage(1)}>Page 1</button>
            <button onClick={()=> setPage(2)}>Page 2</button>
            <button onClick={()=> setPage(3)}>Page 3</button>

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map(planet => (
                        <Planet planet={ planet } key={ planet.name } />
                    ))}
                </div>
            )}
        </div>
    )
}

