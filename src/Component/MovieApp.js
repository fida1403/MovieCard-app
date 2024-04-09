import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function MovieApp() {

    const API_URL='http://omdbapi.com?apikey=1eb3a109';
    const [movies,setMovies]=useState([])
    const [searchTerm, setSearchTerm]=useState('')

    const searchMovie = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovie('spiderman')
    },[])


  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input type='text' placeholder='search for movie' value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}/>
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() =>searchMovie(searchTerm)}
        />
      </div>
      {
        movies?.length ? (
            <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
            </div>) : <div className='empty'>
                <h2>No search found</h2>
            </div>
      }
      
    </div>
  )
}

export default MovieApp
