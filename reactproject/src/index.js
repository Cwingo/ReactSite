// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'; 

// Importing page components
import Home from "./pages/home";
import About from "./pages/about";
import TeamRoster from "./pages/teamroster";
import GameSchedule from "./pages/gameschedule";
import NewsUpdates from "./pages/newsupdates";

// Importing Layout component
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename="/ReactSite"> {/* Explicitly setting basename for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default (Home) Route */}
          <Route path="about" element={<About />} />
          <Route path="team-roster" element={<TeamRoster />} />
          <Route path="game-schedule" element={<GameSchedule />} />
          <Route path="news-updates" element={<NewsUpdates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
