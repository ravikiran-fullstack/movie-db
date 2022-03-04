import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const movie = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

//f0eb4f1b
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
    searchMovies("superman");
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
            return <MovieCard movie={movie} />;
          })
        ) : (
          <div>No Movies Found</div>
        )}
      </div>
    </div>
  );
};

export default App;
