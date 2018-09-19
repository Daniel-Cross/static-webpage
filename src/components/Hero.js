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
              <br /> Race to 5G Summit
              <span className="full-stop">.</span>
            </h1>

            <p className="lead">
              <a className="btn btn-dark btn-lg" href="#" role="button">
                Read Now
              </a>
            </p>
          </div>
        </div>
        <div className="overlap-buttons">
          <div className="col-lg-3 overlap">
            <div className="cover">Cover Story</div>
            <div className="blog-title">The Race to 5G.</div>
            <div className="num">01</div>
          </div>
          <div className="col-lg-3 overlap">
            {' '}
            <div className="cover">Cover Story</div>
            <div className="blog-title">The Wireless Industry.</div>
            <div className="num">02</div>
          </div>
          <div className="col-lg-3 overlap">
            {' '}
            <div className="cover">Blog</div>
            <div className="blog-title">
              Key Takeaways from the Race to 5G Summit.
            </div>
            <div className="num">03</div>
          </div>
          <div className="col-lg-3 overlap">
            {' '}
            <div className="cover">About CTIA</div>
            <div className="blog-title">Our Mission, Everything Wireless.</div>
            <div className="num">04</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
