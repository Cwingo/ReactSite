import React, { useState, useEffect } from 'react';
import '../styles/GameSchedule.css';
import API_BASE_URL from '../config'; // Import the base URL from config

function GameSchedule() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/schedule`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch game schedule');
                }
                return response.json();
            })
            .then((data) => setGames(data))
            .catch((error) => console.error('Error loading schedule:', error));
    }, []);

    return (
        <section className="game-schedule">
            <h2>2024 Alabama Football Game Schedule</h2>
            {games.map((game) => (
                <div className="game-item" key={game._id}>
                    <div className="game-info">
                        <img
                            src={`${API_BASE_URL}/imageslogos/${game.logo}`} // Dynamic logo from API
                            alt={`${game.team} Logo`}
                            className="team-logo"
                        />
                        <h3>{game.team}</h3>
                        <p>{game.date} - {game.location}</p>
                        <p>Result: {game.result}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default GameSchedule;
