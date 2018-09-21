import React from 'react';
import News from './News';
import Reports from './Reports';
import NewsMain from './NewsMain';
import '../styles/NewsSection.css';

const NewsSection = () => {
  return (
    <div className="NewsSection row">
      <div className="col-lg-8 news-section">
        <News />
        <NewsMain />
        <NewsMain />
      </div>
      <div className="col-lg-4 reports-section">
        <Reports />
      </div>
    </div>
  );
};

export default NewsSection;
