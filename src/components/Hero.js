import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="jumbotron">
        <div className="container">
          <div className="col-lg-8">
            <p>Blog</p>
            <h1 className="display-4">
              Key Takeaways from
              <br /> Race 5G Summit
              <span className="full-stop">.</span>
            </h1>

            <p className="lead">
              <a className="btn btn-dark btn-lg" href="#" role="button">
                Read Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
