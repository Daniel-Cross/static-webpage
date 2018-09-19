import React from 'react';
import '../styles/Links.css';

const Links = () => {
  return (
    <div className="Links">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="links-bar">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Popular Channels <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Spectrum
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Public Safety
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Infrastructure
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  5G
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Links;
