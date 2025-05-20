import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get("title") || "";

  const [searchInput, setSearchInput] = useState(searchMovie);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchMovie.trim()) return;

      setLoading(true);

      try {
        setLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=f9f11fce&s=${searchMovie}`
        );
        const data = await response.json();
        setTimeout(() => {
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
          setLoading(false);
        }, 1000); 
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchMovie]);

  const getSortedMovies = () => {
    let sorted = [...movies];
    if (sortOrder === "Oldest_To_Newest") {
      sorted.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (sortOrder === "Newest_To_Oldest") {
      sorted.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    return sorted;
  };

  const displayedMovies = getSortedMovies().slice(0, 8);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchParams({ title: value });
  };

  const renderSkeletons = (count = 8) => {
    return Array.from({ length: count }).map((_, index) => (
      <div className="movie skeleton" key={index}>
        <div className="skeleton-img" />
        <div className="skeleton-title" />
        <div className="skeleton-year" />
      </div>
    ));
  };

  return (
    <div className="overlay">
      <section className="second-page">
        <h1 className="page--title">Browse Movies</h1>
        <div className="search-container">
          <input
            type="text"
            id="search-input"
            className="search-input"
            placeholder="Search for movies..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <svg
            className="search-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <div className="movie__header">
          <h2 className="section__title">
            Results for:{" "}
            <span className="blue">{searchMovie || "No movie entered"}</span>
          </h2>
          <select
            id="filter"
            defaultValue="DEFAULT"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="Oldest_To_Newest">Oldest to Newest</option>
            <option value="Newest_To_Oldest">Newest to Oldest</option>
          </select>
        </div>
      </section>

      <div id="data-container">
        
        <div className="movies">
        {loading
            ? renderSkeletons()
            : displayedMovies.length > 0
              ? displayedMovies.map((movie) => (
                  <Link
                    to={`/movies/${movie.imdbID}`}
                    state={{ movie }}
                    className="movie"
                    key={movie.imdbID}
                  >
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                  </Link>
                ))
              : <p className="no__movie">No movies found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Movies;
