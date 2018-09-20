import React, { Component } from 'react';
import '../styles/News.css';

const News = () => {
  return (
    <div className="News">
      <div className="news-body">
        <div className="news-header">Latest News</div>
        <div className="news-posts">
          <div className="news-content">
            <i className="far fa-newspaper" /> Press Release
            <span className="date"> Jan 8, 2018</span>
            <div className="news-headline">
              CTIA Statement on Approval of First 5G Wireless Standards
            </div>
            <div className="news-paragraph">
              We are pleased to see the approval of the first technical
              standards for next-generation 5G wireless...
            </div>
            <div className="news-tags">
              Consumer News <span className="tag">5G</span>
            </div>
          </div>
          <div className="news-content">
            <i className="far fa-newspaper" /> Press Release
            <span className="date"> Jan 8, 2018</span>
            <div className="news-headline">
              Protecting America's Wireless Networks
            </div>
            <div className="news-paragraph">
              The wireless industry is on the front lines every day, protecting
              our consumers, our networks, and our...
            </div>
            <div className="news-tags">
              5G <span className="tag">Consumer News</span>
              Infrastructure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
