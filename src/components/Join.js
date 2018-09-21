import React, { Component } from 'react';
import '../styles/Join.css';

const Join = () => {
  return (
    <div className="Join">
      <div className="row">
        <div className="col-lg-6 join-content">
          <h2 className="join-header">
            Join CTIA
            <span className="full-stop">.</span>
          </h2>
          <p className="join-text">
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
        <div className="col-lg-6 join-content">
          <h2 className="join-header">
            State of wireless 2018 Report
            <span className="full-stop">.</span>
          </h2>
          <p className="join-text">
            The next generation of wireless
            <br />
            is coming. Read about the current
            <br />
            state of wireless.
          </p>
          <p className="lead">
            <a className="btn btn-dark btn-lg" href="#" role="button">
              Read Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
