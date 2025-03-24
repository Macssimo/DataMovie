import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaFilm, FaTv } from 'react-icons/fa';
import { SiImdb, SiRottentomatoes, SiMetacritic } from 'react-icons/si';

const API_KEY = '880717da';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const allowedRatings = ['Internet Movie Database', 'Rotten Tomatoes', 'Metacritic'];
  const filteredRatings = movie?.Ratings?.filter(rating => 
    allowedRatings.includes(rating.Source)
  ) || [];

  if (isLoading) return <div className="loading">Cargando...</div>;
  if (!movie) return <div className="error">Error al cargar la película</div>;

  return (
    <section className="movie-detail-container">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Volver
      </Link>
      
      <div className="movie-header">
        <div className="poster-section">
          <div className="poster-container">
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className="detail-poster"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450?text=Poster+No+Disponible';
              }}
            />
          </div>
        </div>

        <div className="info-section">
          <div className="ratings-section">
            <h2 className="ratings-title">Calificaciones</h2>
            <div className="ratings-grid">
              {filteredRatings.map((rating, index) => (
                <div className="rating-card" key={index}>
                  <div className="rating-icon">
                    {rating.Source === 'Internet Movie Database' && <SiImdb />}
                    {rating.Source === 'Rotten Tomatoes' && <SiRottentomatoes />}
                    {rating.Source === 'Metacritic' && <SiMetacritic />}
                  </div>
                  <div className="rating-content">
                    <span className="source">{rating.Source}</span>
                    <span className="value">{rating.Value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="compact-meta">
            <div className="meta-item">
              <FaCalendarAlt className="meta-icon" />
              <span>{movie.Year}</span>
            </div>
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{movie.Runtime}</span>
            </div>
            <div className="meta-item">
              {movie.Type === 'movie' ? <FaFilm className="meta-icon" /> : <FaTv className="meta-icon" />}
              <span>{movie.Type === 'movie' ? 'Película' : 'Serie'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;