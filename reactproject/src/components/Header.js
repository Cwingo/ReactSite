import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import alabamaLogo from '../images/alabama-logo.png';

const Header = () => (
  <header className="header">
    <div className="logo-title">
      <img src={alabamaLogo} alt="Alabama Logo" className="header-logo" />
      <h1>Alabama Football RTR</h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Home link */}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/team-roster">Team Roster</Link></li>
        <li><Link to="/game-schedule">Game Schedule</Link></li>
        <li><Link to="/news-updates">News & Updates</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;


