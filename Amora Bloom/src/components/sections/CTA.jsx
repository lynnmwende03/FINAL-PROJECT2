import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-image">
          <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop" alt="lamp" />
        </div>

        <div className="cta-content">
          <h2 className="cta-title">Get more discount<br/>Off your order</h2>
          <p className="cta-sub">Join our mailing list</p>

          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="email" required />
            <button className="cta-button" type="submit">Shop Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
