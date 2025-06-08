import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Your Style Starts Here</h1>
        <h4>More than a haircut — it’s a lifestyle</h4>
        <Link to="/booking">
          <button className="cta-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;


