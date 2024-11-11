
import React, { useState, useEffect } from 'react';


const TeamRoster = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/data/team-roster.json')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error loading roster:', error));
  }, []);

  return (
    <section className="team-roster">
      <h2>Meet the Alabama Football Team</h2>
      <div>
        {players.map(player => (
          <div key={player._id} className="player">
            <img src={`/images/${player.img_name}`} alt={player.name} className="player-img" />
            <h3>{player.name} - #{player.number}</h3>
            <p>{player.position}</p>
            <p>{player.location}</p>
            <ul>
              {player.stats.map((stat, index) => <li key={index}>{stat}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamRoster;
