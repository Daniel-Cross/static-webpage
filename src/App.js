import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Links />
        <Hero />
        <NewsSection />
      </div>
    );
  }
}

export default App;
