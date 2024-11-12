// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Importing page components
import About from './pages/About';
import NewsUpdates from './pages/NewsUpdates';
import GameSchedule from './pages/GameSchedule';
import TeamRoster from './pages/TeamRoster';
import Home from './pages/Home';

// Importing additional components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header /> {/* Header displayed on every page */}
      <Hero /> {/* Hero section, can be removed or conditionally rendered based on the page */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="about" element={<About />} />
        <Route path="news-updates" element={<NewsUpdates />} />
        <Route path="game-schedule" element={<GameSchedule />} />
        <Route path="team-roster" element={<TeamRoster />} />
      </Routes>
      
      <Footer /> {/* Footer displayed on every page */}
    </div>
  );
}

export default App;
