import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "880717da";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies("Avengers"); // Búsqueda inicial
  }, []);

  return (
    <div>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar películas..."
        />
        <button onClick={() => searchMovies(searchTerm)}>Buscar</button>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
