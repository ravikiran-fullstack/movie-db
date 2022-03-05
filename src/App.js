import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=5f154763";
const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (searchTitle) => {
    const response = await fetch(`${API_URL}&s=${searchTitle}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Hollywood");
  }, []);

  return (
    <div className='app'>
      <h1>MovieDB</h1>

      <div className='search'>
        <input
          type='text'
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      <div className='container'>
        {movies?.length > 0 ? (
          movies.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })
        ) : (
          <div>No Movies Found</div>
        )}
      </div>
    </div>
  );
};

export default App;
