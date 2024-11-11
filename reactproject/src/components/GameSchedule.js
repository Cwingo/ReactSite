
import '../styles/GameSchedule.css';
import React, { useState, useEffect } from 'react';


const GameSchedule = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/data/game-schedule.json')
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error('Error loading schedule:', error));
    }, []);

    return (
        <section className="game-schedule">
            <div className="container">
                <h2>2024 Alabama Football Game Schedule</h2>
                <div className="games-list">
                    {games.map((game) => (
                        <div key={game.id} className="game-item">
                            <img 
                                src={`/imageslogos/${game.logo}`} 
                                alt={`${game.team} Logo`} 
                                className="team-logo" 
                            />
                            <div className="game-info">
                                <p className="game-team">{game.team}</p>
                                <p className="game-date-location">{game.date} - {game.location}</p>
                                <p className="game-result">Result: {game.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GameSchedule;
