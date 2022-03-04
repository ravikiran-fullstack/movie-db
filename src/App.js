import { useEffect } from "react";

//f0eb4f1b
const API_URL = "http://www.omdbapi.com?apikey=5f154763";
const App = () => {
  const searchMovies = async (searchTitle) => {
    const response = await fetch(`${API_URL}&s=${searchTitle}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div>
      <h1>MovieDB</h1>
    </div>
  );
};

export default App;
