import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <h2 className="testimonial-title">What People Are Saying About Us</h2>
          <p className="testimonial-sub">Real party hosts sharing how we helped make birthdays magical.</p>

          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="avatar" />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-name">Josh Smith</h3>
              <p className="testimonial-role">Manager of The New York Times</p>
              <p className="testimonial-quote">“They have a perfect touch for making something so professional, stylish and useful for a lot of people. Our party was memorable.”</p>
            </div>
          </div>

          <div className="testimonial-nav">
            <button className="nav-btn prev">‹</button>
            <div className="nav-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <button className="nav-btn next">›</button>
          </div>
        </div>

        <div className="testimonial-right">
          <img className="testimonial-image" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop" alt="party" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
