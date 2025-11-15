import React from "react";
import "./BirthdayParty.css";

const BirthdayParty = () => {
  return (
    <section className="birthday-section">
      <div className="birthday-container">
        <div className="birthday-content">
          <h2 className="birthday-title">Make Every Birthday Magical</h2>
          <p className="birthday-description">
            Create unforgettable memories with personalized birthday celebrations. From themed decorations to professional entertainment, we make your child's special day truly extraordinary and filled with joy.
          </p>
          <button className="birthday-button">Plan Your Party</button>
        </div>
        
        <div className="birthday-image">
          <img 
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1470&auto=format&fit=crop"
            alt="Birthday Celebration" 
            className="birthday-main-image"
          />
        </div>
      </div>
    </section>
  );
};

export default BirthdayParty;
