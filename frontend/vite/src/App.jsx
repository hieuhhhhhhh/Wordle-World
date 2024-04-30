import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./screens/Home";
import Play from "./screens/About";
import Rank from "./screens/About";
import TabBar from "./Components/TabBar";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.content}>
          <TabBar />

          <Routes>
            <Route path="/ranking" element={<Rank />} />
            <Route path="/" element={<Play />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    padding: "20px",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `url('background.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  },
  content: {
    maxWidth: "500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    minHeight: "93vh",
    backgroundColor: "var(--background-color)",
    borderRadius: "10px",
    boxShadow: "0px 5px 12px rgba(0, 0, 0, 1)", // Add shadow here
  },
};

export default App;
