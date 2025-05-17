import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieInfo = ({ Movie }) => {
  const { state } = useLocation();
  const movie = state?.movie;

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
            {movie ? (
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
