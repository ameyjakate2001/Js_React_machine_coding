// Layout.js
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Layout = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
