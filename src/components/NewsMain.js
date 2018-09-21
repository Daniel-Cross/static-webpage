import React, { Component } from 'react';
import '../styles/NewsMain.css';

class NewsMain extends Component {
  state = {};
  render() {
    return (
      <div className="NewsMain">
        <div className="news-content">
          <i className="far fa-newspaper" /> Press Release
          <span className="date"> Jan 8, 2018</span>
          <div className="news-headline">
            CTIA Statement on Approval of First 5G Wireless Standards
          </div>
          <div className="news-paragraph">
            We are pleased to see the approval of the first technical standards
            for next-generation 5G wireless...
          </div>
          <div className="news-tags">
            Consumer News <span className="tag">5G</span>
          </div>
        </div>
        <div className="news-content">
          <i className="far fa-newspaper" /> Press Release
          <span className="date"> Jan 8, 2018</span>
          <div className="news-headline">
            CTIA Statement on Approval of First 5G Wireless Standards
          </div>
          <div className="news-paragraph">
            We are pleased to see the approval of the first technical standards
            for next-generation 5G wireless...
          </div>
          <div className="news-tags">
            Consumer News <span className="tag">5G</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsMain;
