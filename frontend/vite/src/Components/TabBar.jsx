import React from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaChartBar } from "react-icons/lia";

const TabBar = () => {
  return (
    <nav style={styles.navStyle}>
      <Link to="/profile" style={styles.tabStyle}>
        <IoPersonOutline size={24} style={{ color: "var(--color)" }} />
      </Link>
      <Link to="/" style={styles.tabStyle}>
        <IoGameControllerOutline size={24} style={{ color: "var(--color)" }} />
      </Link>
      <Link to="/ranking" style={styles.tabStyle}>
        <LiaChartBar size={24} style={{ color: "var(--color)" }} />
      </Link>
    </nav>
  );
};

const styles = {
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

export default TabBar;
