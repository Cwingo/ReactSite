import React from 'react';
import './styles/App.css';  // Global CSS file import

import Header from './components/Header';
import AboutSection from './components/AboutSection';
import NewsUpdates from './components/NewsUpdates';
import GameSchedule from './components/GameSchedule';
import TeamRoster from './components/TeamRoster';
import Footer from './components/Footer';

// Main app component
function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <NewsUpdates />
      <GameSchedule />
      <TeamRoster />
      <Footer />
    </div>
  );
}

export default App;
