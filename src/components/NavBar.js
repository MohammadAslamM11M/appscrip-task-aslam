import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navStyle">
      <ul className="navListStyle">
        <li>HOME</li>
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default NavBar;
