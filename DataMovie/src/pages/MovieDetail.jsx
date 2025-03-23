import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "880717da";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Cargando...</div>;

  return (
    <section className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <p>Director: {movie.Director}</p>
        <p>Año: {movie.Year}</p>
      </div>
    </section>
  );
};

export default MovieDetail;
