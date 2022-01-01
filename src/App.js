import { useState } from 'react'
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
// import { ReactQueryDevTools } from 'react-query-devtools';

function App() {

  const [page, setPage] = useState('planets')

  return (
    <>
      <div className='App'>
        <h1>Star Wars info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          { page === 'planets' ? <Planets /> : <People /> }
        </div>
      </div>
      {/* <ReactQueryDevTools initialIsOpen={false} /> false so that by defaukt when we load the app, we dont see a big box,
      we have to open it up to see it */}
    </>
  );
}

export default App;
