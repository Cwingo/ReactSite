import React, { useState, useEffect } from 'react';
import '../styles/TeamRoster.css';
import API_BASE_URL from '../config';

function TeamRoster() {
    const [teamRoster, setTeamRoster] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch roster data
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/roster`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch team roster');
                }
                return response.json();
            })
            .then((data) => {
                setTeamRoster(data);
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error loading roster:', error);
                setErrorMessage('Error: Unable to load roster data.');
            });
    }, []);

    // Add a new player
    const addPlayer = (newPlayer) => {
        fetch(`${API_BASE_URL}/api/roster`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayer),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add player');
                }
                return response.json();
            })
            .then((updatedRoster) => {
                setTeamRoster(updatedRoster);
                setSuccessMessage('Player added successfully!');
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error adding player:', error);
                setErrorMessage('Error: Unable to add player.');
                setSuccessMessage('');
            });
    };

    return (
        <section className="roster">
            <h2>Team Roster</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <ul>
                {teamRoster.map((player) => (
                    <li key={player.id}>
                        {player.name} - {player.position}
                    </li>
                ))}
            </ul>
            {/* Add New Player Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const newPlayer = {
                        name: e.target.name.value,
                        position: e.target.position.value,
                        location: e.target.location.value,
                        stats: e.target.stats.value.split(','),
                    };
                    addPlayer(newPlayer);
                    e.target.reset();
                }}
            >
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="position" placeholder="Position" required />
                <input type="text" name="location" placeholder="Location" required />
                <input type="text" name="stats" placeholder="Stats (comma-separated)" required />
                <button type="submit">Add Player</button>
            </form>
        </section>
    );
}

export default TeamRoster;
