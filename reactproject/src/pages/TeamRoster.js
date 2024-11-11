import React from 'react';
import '../styles/TeamRoster.css';
import teamRoster from '../data/team-roster.json';


function TeamRoster() {
    return (
        <div>
         
            {/* Roster Section */}
            <section className="roster">
                <h2>Offensive Starters</h2>
                {teamRoster.map(player => (
                    <div className="player" key={player._id}>
                        <div className="player-info">
                            <img src={`${process.env.PUBLIC_URL}/images/${player.img_name}`} alt={player.name} />
                            <div className="player-details">
                                <h4>{player.name}</h4>
                                <p>Position: {player.position} | Height: {player.stats[0]} | Weight: {player.stats[1]}</p>
                                <p>Location: {player.location}</p>
                            </div>
                        </div>
                        <a href="#" className="bio-link">Full Bio</a>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Alabama Football RTR. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default TeamRoster;
