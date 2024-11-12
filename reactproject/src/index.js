import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'; 

import Layout from "./Layout"; 
import Home from "./pages/Home";
import About from "./pages/About";
import TeamRoster from "./pages/TeamRoster";
import GameSchedule from "./pages/GameSchedule";
import NewsUpdates from "./pages/NewsUpdates";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Main Layout Route with Nested Routes */}
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

