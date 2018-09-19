import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Links />
      </div>
    );
  }
}

export default App;
