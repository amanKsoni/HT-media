import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import TopPlayers from "./components/TopPlayers";
import Stats from "./components/Stats";
import PlayerList from "./components/PlayersList";
import './index.css'


const topPlayers = [
  { image: "https://picsum.photos/150?random=1", name: "Roger K.", role: "Daytrader", stats: "20 Alerts / 90%" },
  { image: "https://picsum.photos/150?random=2", name: "Charlie H.", role: "Swing Trader", stats: "18 Alerts / 85%" },
  { image: "https://picsum.photos/150?random=3", name: "Ahmad M.", role: "Short Bias", stats: "15 Alerts / 80%" },
];
const stats = [
  { title: "Most Tips Given", value: "Cristofer G." },
  { title: "Most Active", value: "Roger K." },
  { title: "Longest Streaks", value: "Dane P." },
  { title: "Rank Change", value: "Nolan F." },
];

const players = [
  { name: "Roger K.", role: "Daytrader", streaks: "14", alerts: "20", trades: "497", avgGain: "90%", xscore: "83" },
  { name: "Charlie H.", role: "Swing Trader", streaks: "13", alerts: "18", trades: "359", avgGain: "85%", xscore: "80" },
];

const App = () => {
  const [data,setData]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Path to the JSON file in the public directory
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const updatedData = data.map((item, index) => ({
      ...item,
      image: `https://picsum.photos/150?random=${index + 1}`,
    }));
    setData(updatedData);
  }, []);




  return (
    <div className="app">
      <Navbar />
      <TopPlayers players={topPlayers} />
      <Stats stats={stats} />
      <PlayerList players={data} /> 
    </div>
  );
};

export default App;
