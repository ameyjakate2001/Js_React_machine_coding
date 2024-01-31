import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
const Navbar = () => {
  const { darkMode, handleDarkModeChange } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="turn-parent">
        <div
          className={`turn-icon ${darkMode ? "on" : "off"}`}
          onClick={handleDarkModeChange}
        ></div>
      </div>
    </nav>
  );
};
export default Navbar;
