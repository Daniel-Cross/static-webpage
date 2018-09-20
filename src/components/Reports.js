import React, { Component } from 'react';
import '../styles/Reports.css';

class Reports extends Component {
  state = {
    image:
      'https://bitebackpub.s3.amazonaws.com/uploads/book/image/56/cover_9781849546089.jpg'
  };
  render() {
    return (
      <div className="Reports">
        <div className="report-body">
          <div className="report-content">
            <div className="report-title">Reports</div>
            <div className="report-story row">
              <img
                src={this.state.image}
                alt="business book cover"
                className="report-book col-lg-6"
              />
              <p className="report-headline col-lg-6">
                Protecting America's Wireless Networks
                <br />
                <span className="report-text">
                  The wireless industry is on the front lines every day,
                  producing...
                </span>
              </p>
            </div>
            <div className="report-story row">
              <img
                src={this.state.image}
                alt="business book cover"
                className="report-book col-lg-6"
              />
              <p className="report-headline col-lg-6">
                Commercial Wireless Networks
                <br />
                <span className="report-text">
                  The Essential Foundation of the Drone Industry
                </span>
              </p>
            </div>
            <div className="report-story row">
              <img
                src={this.state.image}
                alt="business book cover"
                className="report-book col-lg-6"
              />
              <p className="report-headline col-lg-6">
                Commercial Wireless Networks
                <br />
                <span className="report-text">
                  The Essential Foundation of the Drone Industry
                </span>
              </p>
            </div>
            <div className="report-story row">
              <img
                src={this.state.image}
                alt="business book cover"
                className="report-book col-lg-6"
              />
              <p className="report-headline col-lg-6">
                Commercial Wireless Networks
                <br />
                <span className="report-text">
                  The Essential Foundation of the Drone Industry
                </span>
              </p>
            </div>
            <a href="#!">
              <p className="report-link">See All Reports</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
