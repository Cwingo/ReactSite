import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css'; // Global CSS file import

import Header from './components/Header';
import Footer from './components/Footer';

// Importing page components
import About from './pages/About';
import NewsUpdates from './pages/NewsUpdates';
import GameSchedule from './pages/GameSchedule';
import TeamRoster from './pages/TeamRoster';
import Home from './pages/Home'; // Make sure this matches the exact file name

// Main app component
function App() {
  return (
    <div className="App">
      <Header /> {/* Header will be visible on all pages */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news-updates" element={<NewsUpdates />} />
        <Route path="/game-schedule" element={<GameSchedule />} />
        <Route path="/team-roster" element={<TeamRoster />} />
      </Routes>

      <Footer /> {/* Footer will be visible on all pages */}
    </div>
  );
}

export default App;

