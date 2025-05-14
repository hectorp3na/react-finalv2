import React from "react";


const Movies = () => {
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
            />
            <svg
              className="search-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
  
          </div>
  
            <div className="movie__header">
              <h2 className="section__title">
                  All <span class="blue">Movies:</span>
              </h2>
              <select id="filter" onchange="filterMovies(event)">
                  <option value="" disabled selected>Sort</option>
                  <option value="Oldest_To_Newest">Oldest to Newest</option>
                  <option value="Newest_To_Oldest">Newest to Oldest</option>
              </select>
            </div>
            <div className="movies">
  
              
            
          </div>
        </section>
        <div id="data-container"></div>
  
  
      </div>
      
      
    )
}

export default Movies;