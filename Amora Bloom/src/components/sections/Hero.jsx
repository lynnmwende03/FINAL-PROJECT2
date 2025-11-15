// src/layout/Hero.jsx
import React from "react";
import "./section.css";

const Hero = () => {
  const stats = [
    { number: "6", label: "Years of experience" },
    { number: "80K", label: "Kids Who have Attended parties" },
    { number: "33K", label: "Birthdays Celebrated" },
    { number: "32K", label: "Birthday Enthusiasts" }
  ];

  const navLinks = [
    { label: "Home", id: "tt1" },
    { label: "About", id: "tt2" },
    { label: "Features", id: "tt3" },
    { label: "Contact", id: "tt4" }
  ];

  return (
    <section className="hero-section">
      <div className="hero-menu">
        <div className="logo">JoyShop</div>
        <div className="hero-links">
            <nav>
            {navLinks.map((link) => (
              <a key={link.id} href="#" id={link.id}>
                {link.label}
              </a>
            ))}
            </nav>
          </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">BRING JOY MAKE A DIFFERENCE</h1>
          <p className="hero-description">
            Please join us in spreading happiness to children in need by celebrating your birthday with Amora Bloom. <br />
          Your special day can light up a child's life through our thoughtful gift-giving initiative.
          </p>
        <button className="hero-button">LEARN MORE</button>
      </div>

      <div className="hero-status">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
