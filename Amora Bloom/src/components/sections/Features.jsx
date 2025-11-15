import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-image">
          <img src="/src/assets/images/birth\ 1.jpg" alt="Birthday celebration" className="feature-main-image" />
        </div>
        
        <div className="features-content">
          <h2 className="features-title">Creating Magical Birthday Moments</h2>
          <p className="features-subtitle">
            We make every birthday special with personalized celebrations that bring joy to children and create lasting memories
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <h3>Custom Party Planning</h3>
              <p>Our expert team helps plan the perfect celebration, from themed decorations to entertainment, making each birthday unique and memorable.</p>
            </div>
            
            <div className="feature-item">
              <h3>Gift Registry Service</h3>
              <p>Create a wishlist for your child's special day, making it easy for family and friends to choose the perfect presents.</p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
