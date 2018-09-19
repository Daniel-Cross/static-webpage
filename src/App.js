import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import News from './components/News';
import Reports from './components/Reports';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Links />
        <Hero />
        <News />
        <Reports />
      </div>
    );
  }
}

export default App;
