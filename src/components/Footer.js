import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          CTIA LOGO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Get in Touch <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Subscribe
            </a>
            <a class="nav-item nav-link" href="#">
              Career
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
