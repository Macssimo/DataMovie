import { Link } from 'react-router-dom';
import { FaStar, FaFilm, FaTv } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const isMovie = movie.Type === 'movie';
  
  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} className="card-link">
        {/* Contenedor de la imagen */}
        <div className="image-container">
          {movie.Poster !== 'N/A' ? (
            <img 
              src={movie.Poster} 
              alt={`Poster de ${movie.Title}`} 
              loading="lazy"
              className="card-image"
            />
          ) : (
            <div className="placeholder-poster">
              {isMovie ? <FaFilm className="placeholder-icon" /> : <FaTv className="placeholder-icon" />}
            </div>
          )}
        </div>

        {/* Contenedor del contenido textual */}
        <div className="text-container">
          <h3 className="card-title">{movie.Title}</h3>
          
          <div className="meta-container">
            <div className="meta-item">
              <FaStar className="star-icon" />
              <span className="movie-year">{movie.Year}</span>
            </div>
            <div className="type-badge">
              {isMovie ? 'Película' : 'Serie'}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;