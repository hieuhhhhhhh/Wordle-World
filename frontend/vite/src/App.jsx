import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaChartBar } from "react-icons/lia";

import Profile from "./screens/Home";
import Play from "./screens/About";
import Rank from "./screens/About";
import TabBar from "./Components/TabBar";

import "./index.css";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.content}>
          <TabBar />

          <Routes>
            <Route path="/ranking" exact element={<Rank />} />
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
  },
  content: {
    width: "500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    minHeight: "93vh", // Take up all vertical space
  },
  navStyle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--background-color)",
    borderTopLeftRadius: "10px", // Adjust the radius as needed
    borderTopRightRadius: "10px", // Adjust the radius as needed
  },
  tabStyle: {
    marginRight: "20px",
    marginLeft: "20px",

    display: "flex",
    alignItems: "center", // Center content vertically
    justifyContent: "center", // Center content horizontally
    width: "50px",
    height: "40px",
    padding: "10px",
    color: "black",
    textDecoration: "none",
  },
};

export default App;
