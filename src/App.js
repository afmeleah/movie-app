import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const featured = "https://api.themoviedb.org/3/discover/movie?api_key=5be0a5b2fe42fe02ae285c4f94a0c437&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const search = "https://api.themoviedb.org/3/search/movie?api_key=5be0a5b2fe42fe02ae285c4f94a0c437&language=en-US&query="

// const imdb = "https://imdb-api.com/en/API/MostPopularMovies/k_owbu3fq2"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("")

  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      console.log(data)
    })
  }

  // getMovies(imdb)

  useEffect(() => {
    getMovies(featured)
  }, [])

  const searchSubmit = (e) => {
    e.preventDefault();

    getMovies(search + searchMovie)
    setSearchMovie("")
  }

  const changeSearch = (e) => {
    setSearchMovie(e.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={searchSubmit}>
          <input 
            className="search" 
            type="text" 
            placeholder="Search"
            value={searchMovie}
            onChange={changeSearch} 
          />
        </form>
      </header>
      <div className="movie-container">

        {movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </>
  );
}

export default App;


