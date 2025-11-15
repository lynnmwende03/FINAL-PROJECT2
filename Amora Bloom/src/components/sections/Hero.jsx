// src/layout/Hero.jsx
import React from "react";
import "./section.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-menu">
          <div className="logo">Joyshop</div>
          <div className="hero-links"> 
            <nav>
              <a href="#" id="tt1">Home</a>
              <a href="#"id="tt2">About</a>
              <a href="#"id="tt3">Features</a>
              <a href="#"id="tt4">Contact</a> 

            </nav>
          </div>
      </div>

      <div className="hero-content">
          <h1 className="hero-title"> BRING JOY MAKE A DIFFERENCE </h1>
          <p className="hero-description">
            Please join us in spreading happiness to children in need by celebrating your birthday with Amora Bloom. Your special day can light up a child's life through our thoughtful gift-giving initiatives. Together, we can make birthdays unforgettable for those who deserve it most.
          </p>
          <button className="hero-button"> LEARN MORE </button>
      </div>

      <div className="hero-status">
        <h2>6</h2>
        <p>Years of experience</p>
        <h3>80K</h3>
        <p>Kids Who have Attended parties</p>
        <h4>33K</h4>
        <p>Birthdays Celebrated</p>
        <h5>32K</h5>
        <p>Birthday Enthusiasts</p>
      </div>
      
    </section>
  );
};

export default Hero;
