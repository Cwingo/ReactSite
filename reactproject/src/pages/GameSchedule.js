import React, { useState, useEffect } from 'react';
import '../styles/GameSchedule.css';

function GameSchedule() {
    const [gameSchedule, setGameSchedule] = useState([]);

    useEffect(() => {
        // Fetch game schedule data from the deployed API
        fetch('https://projectapi-qow8.onrender.com/api/schedule') // Using deployed API
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch game schedule');
                }
                return response.json();
            })
            .then((data) => setGameSchedule(data))
            .catch((error) => console.error('Error loading schedule:', error));
    }, []);

    return (
        <div>
            {/* Record Menu Section */}
            <section className="record-menu">
                <div className="container">
                    <div className="record-stat">
                        <h3>Overall</h3>
                        <p>6-2</p>
                    </div>
                    <div className="record-stat">
                        <h3>Streak</h3>
                        <p>
                            <span className="green-dot"></span> W1
                        </p>
                    </div>
                    <div className="record-stat">
                        <h3>Home</h3>
                        <p>4-0</p>
                    </div>
                    <div className="record-stat">
                        <h3>Away</h3>
                        <p>2-2</p>
                    </div>
                    <div className="record-stat">
                        <h3>Neutral</h3>
                        <p>0-0</p>
                    </div>
                </div>
            </section>

            {/* Game Schedule Section */}
            <main>
                <section className="game-schedule">
                    <div className="container">
                        <h2>2024 Alabama Football Game Schedule</h2>
                        <div id="schedule-container">
                            {gameSchedule.map((game) => (
                                <div className="game" key={game._id}>
                                    <div className="game-info">
                                        <h3>{game.team}</h3>
                                        <p>@ {game.location}</p>
                                        <p>{game.date}</p>
                                    </div>
                                    <div className="game-result">
                                        <p>{game.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <div className="container">
                    <p>&copy; 2024 Alabama Football RTR. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default GameSchedule;
