import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
    return (
        <div>
            {/* Secondary Hero Section */}
            <section className="secondary-hero">
                <div className="hero-content">
                    <h2>About Alabama Football</h2>
                    <p>Learn more about the legendary Alabama Crimson Tide football program and its incredible legacy.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <h2>Who Are We?</h2>
                    <p>Hello and welcome! I'm an Alabama football fan, and this site is my way of sharing that passion with other fans. Here, you'll find a blend of in-depth analysis, player profiles, and up-to-date coverage of the latest games and developments. My goal is to provide a nice and informative space for anyone looking to stay connected with Alabama football. Whether you're here to catch up on recent scores or dive into the program's winning past, I hope you find this site a valuable resource. RTR!</p>

                    <h2>History</h2>
                    <p>Alabama Crimson Tide football stands as one of the most successful programs in college football history. With 18 national championships, the Tide has consistently proven itself as a powerhouse on the national stage. In addition to its national titles, Alabama has claimed 33 SEC championships, the most in the conference's history, showcasing its dominance in one of the toughest leagues in college football.</p>

                    <p>Beyond its success in college, Alabama is renowned for producing top talent for the NFL. The program has sent more players to the NFL than any other school, with numerous first-round draft picks and Pro Bowl athletes emerging from the ranks. Alabama’s ability to develop players for the next level is a testament to its exceptional coaching, facilities, and commitment to excellence, making it a breeding ground for future football stars.</p>

                    {/* Absolute URL for the Image */}
                    <img src="https://cwingo.github.io/reactproject/images/usa_today_17436934.jpg" alt="Alabama Player" className="featured-image" />
                </div>
            </section>
        </div>
    );
}

export default About;

