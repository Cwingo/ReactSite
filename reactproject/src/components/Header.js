import React from 'react';
import '../styles/Header.css';


import alabamaLogo from '../images/alabama-logo.png'; // Update with the correct image path

const Header = () => {
    return (
        <header className="header">
            <div className="logo-title">
                <img src={alabamaLogo} alt="Alabama Logo" className="header-logo" />
                <h1>Alabama Football RTR</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/team-roster">Team Roster</a></li>
                    <li><a href="/game-schedule">Game Schedule</a></li>
                    <li><a href="/news-updates">News & Updates</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
