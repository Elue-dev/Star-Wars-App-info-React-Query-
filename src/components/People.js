import { useState } from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const fetchPeople = async (page) => {
    const response = await fetch(`http://swapi.dev/api/people/?page=${page}`)
    return response.json()
} 

export default function People() { 

    const [ page, setPage ] = useState(1)
    const { data, status } = useQuery(['people', page], ()=>fetchPeople(page) )

    return (
        <div>
            <h1>People</h1>
            
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
                    {data.results.map(person => (
                        <Person person={ person } key={ person.name } />
                    ))}
                </div>
            )}
        </div>
    )
}
