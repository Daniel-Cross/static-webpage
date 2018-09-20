import React, { Component } from 'react';
import '../styles/NewsMain.css';

class NewsMain extends Component {
  state = {};
  render() {
    return (
      <div className="NewsMain row flex-inline">
        <div className="main-photo col-lg-2">
          <img
            src={require('/Users/DanielCross/Projects/anytime-after-9/src/images/farmer.jpeg')}
            alt="farmer"
            height="400px"
            className="photo"
          />
          <div className="col-lg-2">iqwugfasiczxug</div>
        </div>
      </div>
    );
  }
}

export default NewsMain;
