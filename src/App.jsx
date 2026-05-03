import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function Player({ name, time, setTime }) {
  return (
    <div style={{ textAlign: "center", flex: 1 }}>
      <h2>{name}</h2>
      <p style={{ fontSize: "24px" }}>{formatTime(time)}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={() => setTime(time + 20)}>
          +20s 😬 <br /> Forgot song
        </button>

        <button onClick={() => setTime(time + 60)}>
          +60s 😱 <br /> Duplicate
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [thibo, setThibo] = useState(0);
  const [lien, setLien] = useState(0);

  // Save to localStorage
  useEffect(() => {
    const savedThibo = localStorage.getItem("thibo");
    const savedLien = localStorage.getItem("lien");
    if (savedThibo) setThibo(Number(savedThibo));
    if (savedLien) setLien(Number(savedLien));
  }, []);

  useEffect(() => {
    localStorage.setItem("thibo", thibo);
    localStorage.setItem("lien", lien);
  }, [thibo, lien]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        ❄️ Ice Swim Bet Tracker ❄️
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Player name="Thibo 🧊" time={thibo} setTime={setThibo} />

        {/* Cartoon Austrian Scene */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          style={{
            width: "150px",
            height: "150px",
            position: "relative",
          }}
        >
          {/* Lake */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "50px",
              background: "#0077cc",
              borderRadius: "50%",
            }}
          />

          {/* Mountains */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "10px",
              width: "0",
              height: "0",
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "80px solid green",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "10px",
              width: "0",
              height: "0",
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "80px solid green",
            }}
          />

          {/* Snow */}
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              left: "30px",
              width: "20px",
              height: "20px",
              background: "white",
              borderRadius: "50%",
            }}
          />
        </motion.div>

        <Player name="Lien 🥶" time={lien} setTime={setLien} />
      </div>

      <p style={{ textAlign: "center", opacity: 0.7 }}>
        Every mistake = closer to freezing in Austria 🏔️❄️
      </p>
    </div>
  );
}
