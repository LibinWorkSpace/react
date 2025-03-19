import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
        <h1 className="logo">🏡 RealEstatePro</h1>
        <Link to = "/list">About</Link>
    </div>
  );
}

export default Home;
