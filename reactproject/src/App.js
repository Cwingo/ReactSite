import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure proper router type
import './styles/App.css';

// Importing page components
import About from './pages/About';
import NewsUpdates from './pages/NewsUpdates';
import GameSchedule from './pages/GameSchedule';
import TeamRoster from './pages/TeamRoster';
import Home from './pages/Home';

// Importing Layout component
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route definitions */}
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="about" element={<About />} />
          <Route path="news-updates" element={<NewsUpdates />} />
          <Route path="game-schedule" element={<GameSchedule />} />
          <Route path="team-roster" element={<TeamRoster />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
