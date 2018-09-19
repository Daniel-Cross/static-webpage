import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light navbar-center bg-white">
        <a className="navbar-brand" href="#">
          CTIA LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                The Wireless Industry <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Positions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Consumer Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About CTIA
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a href="#!" className="mr-3">
              <i className="fas fa-search" />
            </a>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
