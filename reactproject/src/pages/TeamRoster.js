import React, { useState, useEffect } from 'react';
import '../styles/TeamRoster.css';

function TeamRoster() {
    const [teamRoster, setTeamRoster] = useState([]);

    useEffect(() => {
        // Fetch team roster data from the deployed API
        fetch('https://projectapi-qow8.onrender.com/api/roster') // Using deployed API
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch team roster');
                }
                return response.json();
            })
            .then((data) => setTeamRoster(data))
            .catch((error) => console.error('Error loading roster:', error));
    }, []);

    return (
        <>
            {/* Third Hero Section */}
            <section className="third-hero">
                <div className="hero-content">
                    <h2>About Alabama Football</h2>
                </div>
            </section>

            <div>
                {/* Roster Section */}
                <section className="roster">
                    <h2>Offensive Starters</h2>
                    {teamRoster.map((player) => (
                        <div className="player" key={player.id}>
                            <div className="player-info">
                                <img
                                    src={`https://projectapi-qow8.onrender.com/imageslogos/${player.img_name}`} // Correct API path for images
                                    alt={player.name}
                                    className="player-image"
                                />
                                <div className="player-details">
                                    <h4>{player.name}</h4>
                                    <p>
                                        Position: {player.position} | Height: {player.stats[0]} | Weight: {player.stats[1]}
                                    </p>
                                    <p>Location: {player.location}</p>
                                </div>
                            </div>
                            <a href="#" className="bio-link">
                                Full Bio
                            </a>
                        </div>
                    ))}
                </section>

                {/* Footer */}
                <footer>
                    <p>&copy; 2024 Alabama Football RTR. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default TeamRoster;
