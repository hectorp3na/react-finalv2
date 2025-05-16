import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BuildingLogo from "../assets/a56658f2-8d1c-4c50-9134-9d073140ffa1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Landing = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    if (searchMovie.trim()) {
      navigate(`/movies?title=${encodeURIComponent(searchMovie)}`);
    }
  }

  function onSearchKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }


    return (
        <section id="landing-page">
        <h1 className="title">America's #1 Movie Database Platform</h1>
        <h2 className="description">
          LOOKUP YOUR FAVORITE MOVIES WITH{" "}
          <span style={{ color: "#02439f" }}>BLINKER</span>
        </h2>
        <div className="input-wrapper">
          <form onSubmit={handleSearch}>
            <input 
            type="text" 
            placeholder="Search by Name" 
            value={searchMovie}
            onChange={(event) => setSearchMovie(event.target.value)}
            onKeyDown={onSearchKeyPress}
            />
            </form>
       
          <a href="/movies">
              <i className="fa-solid fa-magnifying-glass">
              <FontAwesomeIcon
                className="not-loading"
                icon="fa-solid fa-magnifying-glass"
                color="black"
                
              />
              </i>
  
          </a>
        </div>
        <div className="img-building">
          <img className="building-logo" src={BuildingLogo} alt="Building Logo" />
        </div>
      </section>
    )
}

export default Landing;