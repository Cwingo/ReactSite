import React, { useState, useEffect } from 'react';
import '../styles/GameSchedule.css';
import API_BASE_URL from '../config';

function GameSchedule() {
    const [gameSchedule, setGameSchedule] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/schedule`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch schedule');
                }
                return response.json();
            })
            .then((data) => {
                setGameSchedule(data);
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error loading schedule:', error);
                setErrorMessage('Error: Unable to load schedule data.');
            });
    }, []);

    return (
        <section className="game-schedule">
            <h2>Game Schedule</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <ul>
                {gameSchedule.map((game) => (
                    <li key={game.id}>
                        {game.team} - {game.date} at {game.location}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GameSchedule;
