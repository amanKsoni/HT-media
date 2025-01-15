import React from "react";

const Stats = ({ stats }) => {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h4>{stat.title}</h4>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
