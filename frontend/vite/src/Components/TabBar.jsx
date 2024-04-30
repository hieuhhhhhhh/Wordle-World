import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaChartBar } from "react-icons/lia";

const TabBar = () => {
  const location = useLocation();

  return (
    <nav style={styles.navStyle}>
      <NavLink to="/profile" style={styles.tabStyle}>
        <IoPersonOutline
          size={30}
          className="tabIcon"
          style={
            location.pathname === "/profile" ? styles.activeIcon : styles.icon
          }
        />
      </NavLink>
      <NavLink to="/" style={styles.tabStyle}>
        <IoGameControllerOutline
          size={30}
          className="tabIcon"
          style={location.pathname === "/" ? styles.activeIcon : styles.icon}
        />
      </NavLink>
      <NavLink to="/ranking" style={styles.tabStyle}>
        <LiaChartBar
          size={30}
          className="tabIcon"
          style={
            location.pathname === "/ranking" ? styles.activeIcon : styles.icon
          }
        />
      </NavLink>
    </nav>
  );
};

const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--2nd-background-color)",
    borderTopLeftRadius: "10px", // Adjust the radius as needed
    borderTopRightRadius: "10px", // Adjust the radius as needed
  },
  tabStyle: {
    flex: 1, // This will make each component take up equal space
    display: "flex",

    justifyContent: "center", // Center content horizontally
    color: "black",
    textDecoration: "none",
  },
  icon: {
    padding: "10px",
    flex: 1,
    color: "var(--color)",
  },
  activeIcon: {
    padding: "10px",
    flex: 1,
    color: "var(--theme-color)",
    borderBottom: "2px solid",
    borderColor: "var(--theme-color)",
  },
};

export default TabBar;
