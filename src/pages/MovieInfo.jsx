import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieInfo = ({ Movie }) => {
  const { state } = useLocation();
  const initialMovie = state?.movie;
  const [movie, setMovie] = useState(initialMovie);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!initialMovie?.imdbID) return;

      setLoading(true);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=f9f11fce&i=${initialMovie.imdbID}&plot=full`
        );
        const data = await response.json();
        setTimeout(() => {
          setMovie(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch full movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [initialMovie]);

  return (
    <div id="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top arrow-left-group">
              <Link to="/movies" className="arrow-left-link">
                <FontAwesomeIcon
                  icon="arrow-left"
                  className="arrow-left-icon"
                />
                <h1 className="arrow-left-text">Movies</h1>
              </Link>
            </div>

            {loading ? (
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <div className="skeleton skeleton-img"></div>
              </figure>
              <div className="movie__selected--description">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
            </div>
          ) : movie ? (
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie__selected--img"
                />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movie.Title}</h2>
                <p className="movie__selected--info">
                  <strong>Year:</strong> {movie.Year}
                </p>
                <p className="movie__selected--info">
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p className="movie__selected--info">
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p className="movie__selected--info">
                  <strong>Writer:</strong> {movie.Writer}
                </p>
                <p className="movie__selected--info">
                  <strong>Plot:</strong> {movie.Plot}
                </p>
              </div>
            </div>
          ) : (
            <p className="no__movie">
              Movie not found. Return to <Link to="/movies">Movies</Link>.
            </p>
          )}
        </div>
      </div>
    </main>
  </div>
);
};

export default MovieInfo;
