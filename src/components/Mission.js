import React from 'react';
import '../styles/Mission.css';

const Mission = () => {
  return (
    <div className="Mission">
      <div className="mission">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="display-4">
              Our Mission
              <span className="full-stop">.</span>
            </h1>
            <p className="mission-text">
              CTIA represents the U.S. wireless communications
              <br />
              industry and the companies throughout the
              <br />
              mobile ecosystem that enable consumers to lead
              <br />a 21st Century connected life.
            </p>
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

export default Mission;
