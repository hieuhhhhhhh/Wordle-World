// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  return (
    <Router>
      <nav style={styles.navStyle}>
        <Link to="/" style={styles.tabStyle}>
          Home
        </Link>
        <Link to="/about" style={styles.tabStyle}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0", // Background color added
    padding: "10px", // Added padding for better spacing
  },

  tabStyle: {
    padding: "10px",
    marginRight: "10px",
    textDecoration: "none",
    color: "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

export default App;
