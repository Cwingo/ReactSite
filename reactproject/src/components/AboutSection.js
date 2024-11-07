import React from 'react';
import '../styles/AboutSection.css';
import playerImage from '../images/usa_today_17436934.jpg'; // Directly import the image

const AboutSection = () => (
  <section className="about-section">
    <div className="container">
      <h2>Who Are We?</h2>
      <p>Hello and welcome! I'm an Alabama football fan, and this site is my way of sharing that passion...</p>
      <h2>History</h2>
      <p>Alabama Crimson Tide football stands as one of the most successful programs in college football...</p>
      <img src={playerImage} alt="Alabama Player" className="featured-image" /> {/* Use imported image */}
    </div>
  </section>
);

export default AboutSection;
