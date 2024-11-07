import React from 'react';
import '../styles/Footer.css';



const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/team-roster">Team Roster</a>
                <a href="/game-schedule">Game Schedule</a>
                <a href="/news-updates">News & Updates</a>
            </div>
            <p>&copy; 2024 Alabama Football RTR. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
