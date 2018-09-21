import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import Mission from './components/Mission';
import NewsSection from './components/NewsSection';
import Join from './components/Join';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Links />
        <Hero />
        <NewsSection />
        <Mission />
        <Join />
        <Footer />
      </div>
    );
  }
}

export default App;
