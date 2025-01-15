

import React from "react";

const PlayerList = ({ players }) => {
  return (
    <table className="player-list">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Role</th>
          <th>Streaks</th>
          <th>Alerts</th>
          <th>Trades</th>
          <th>Avg Gain</th>
          <th>Xscore</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.role}</td>
            <td>{player.streaks}</td>
            <td>{player.alerts}</td>
            <td>{player.trades}</td>
            <td>{player.avgGain}</td>
            <td>{player.xscore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerList;
