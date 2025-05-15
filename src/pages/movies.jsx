import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("fast");
  const [sortOrder, setSortOrder] = useState("");


  const getSortedMovies = () => {
    let sorted = [...movies];
    if (sortOrder === "Oldest_To_Newest") {
      sorted.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (sortOrder === "Newest_To_Oldest") {
      sorted.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    return sorted;
  };

  const displayedMovies = getSortedMovies().slice(0, 6); 
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=f9f11fce&s=${searchMovie}`
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchMovie]);

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
            onChange={(e) => setSearchMovie(e.target.value)}
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
            All <span className="blue">Movies:</span>
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
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => (
              <div className="movie" key={movie.imdbID}>
                 <h3>{movie.Title}</h3>
                 <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
               
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Movies;
