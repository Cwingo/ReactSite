import React, { useState, useEffect } from 'react';
import '../styles/TeamRoster.css';
import API_BASE_URL from '../config'; // Import the base URL from config

function TeamRoster() {
    const [teamRoster, setTeamRoster] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/roster`)
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
        <section className="roster">
            <h2>Offensive Starters</h2>
            {teamRoster.map((player) => (
                <div className="player" key={player._id}>
                    <div className="player-info">
                        <img
                            src={`${API_BASE_URL}/imageslogos/${player.img_name}`} // Dynamic image from API
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
    );
}

export default TeamRoster;
