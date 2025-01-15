import React from "react";

const TopPlayers = ({ players }) => {
  return (
    <div className="top-players">
      {players.map((player, index) => (
        <div key={index} className={`player-card ${index + 1}`}>
          <h3>{`${index + 1}st`}</h3>
          <img src={player.image} alt={player.name} />
          <h4>{player.name}</h4>
          <p>{player.role}</p>
          <p>{player.stats}</p>
          <button>Profile</button>
        </div>
      ))}
    </div>
  );
};

export default TopPlayers;
