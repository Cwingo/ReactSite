// Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Shared Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team-roster">Team Roster</Link>
        <Link to="/game-schedule">Game Schedule</Link>
        <Link to="/news-updates">News & Updates</Link>
      </nav>
      
      {/* Outlet renders the nested route component */}
      <Outlet />
    </div>
  );
};

export default Layout;
