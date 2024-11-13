import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Importing page components (assuming lowercase file names)
import About from './pages/about';
import NewsUpdates from './pages/newsupdates';
import GameSchedule from './pages/gameschedule';
import TeamRoster from './pages/teamroster';
import Home from './pages/home';

// Importing Layout component
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Home page */}
        <Route path="about" element={<About />} />
        <Route path="news-updates" element={<NewsUpdates />} />
        <Route path="game-schedule" element={<GameSchedule />} />
        <Route path="team-roster" element={<TeamRoster />} />
      </Route>
    </Routes>
  );
}

export default App;

