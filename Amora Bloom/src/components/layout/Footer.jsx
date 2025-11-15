import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="brand">
            <h3 className="brand-title">JoyShop</h3>
            <p className="brand-sub">© AmoraBloom 2025 — All Rights Reserved</p>
          </div>

          <div className="footer-columns">
            <div className="col">
              <h4>Party Services</h4>
              <ul>
                <li>Party Planning</li>
                <li>Decorations</li>
                <li>Entertainment</li>
                <li>Catering</li>
              </ul>
            </div>

            <div className="col">
              <h4>Party Packages</h4>
              <ul>
                <li>Basic Package</li>
                <li>Premium Package</li>
                <li>Deluxe Package</li>
                <li>Custom Packages</li>
              </ul>
            </div>

            <div className="col">
              <h4>Resources</h4>
              <ul>
                <li>Party Ideas</li>
                <li>Photo Gallery</li>
                <li>Blog & Tips</li>
                <li>Contact Support</li>
              </ul>
            </div>

            <div className="col">
              <h4>About Us</h4>
              <ul>
                <li>Our Story</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="col">
              <h4>Quick Links</h4>
              <ul>
                <li>Book Now</li>
                <li>FAQ</li>
                <li>Policies</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="socials">
            <a href="#" aria-label="facebook" className="social">FB</a>
            <a href="#" aria-label="twitter" className="social">TW</a>
            <a href="#" aria-label="instagram" className="social">IG</a>
            <a href="#" aria-label="linkedin" className="social">IN</a>
          </div>

          <div className="footer-note">© AmoraBloom 2025 — All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
