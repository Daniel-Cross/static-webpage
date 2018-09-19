import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Links />
        <Hero />
      </div>
    );
  }
}

export default App;
