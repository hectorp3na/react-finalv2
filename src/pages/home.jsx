import "../index.css";
import BuildingLogo from "../assets/a56658f2-8d1c-4c50-9134-9d073140ffa1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {
  return (
    <section id="landing-page">
      <h1 className="title">America's #1 Movie Database Platform</h1>
      <h2 className="description">
        LOOKUP YOUR FAVORITE MOVIES WITH{" "}
        <span style={{ color: "#02439f" }}>BLINKER</span>
      </h2>
      <div className="input-wrapper">
        <a href="./user.html">
          <input type="text" placeholder="Search by Name" />
        </a>
        <a href="./user.html">
          <button className="not-loading">
            <i className="fa-solid fa-magnifying-glass">
            <FontAwesomeIcon
              className="not-loading"
              icon="fa-solid fa-magnifying-glass"
              color="black"
              onClick=""
            />
            </i>
          </button>
        </a>
      </div>
      <div className="img-building">
        <img className="building-logo" src={BuildingLogo} alt="Building Logo" />
      </div>
    </section>
  );
};

export default Home;
