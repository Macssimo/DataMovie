import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </article>
  );
};

export default MovieCard;
