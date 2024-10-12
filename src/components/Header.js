"use client";

import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="headerStyle">
      <div className="logoIconStyle">
        <img src="/hamburgerIcon.png" alt="ham burger icon" style={{ height: '35px', width: '35px' }}/>
        <img src="/logo.png" alt="logo" style={{ height: '35px', width: '35px' }}/>
      </div>
      <h1 className="logoTextStyle inter-bold">LOGO</h1>
      <div className="iconStyle">
        <img src="/searchIcon.png" alt="logo" style={{ height: '1.5rem', width: '1.5rem' }}/>
        <img src="/addToWishlistIcon.png" alt="logo" style={{ height: '1.5rem', width: '1.5rem' }}/>
        <img src="/cartIcon.png" alt="logo" style={{ height: '1.5rem', width: '1.5rem' }}/>
        <img src="/profileIcon.png" alt="logo" style={{ height: '1.5rem', width: '1.5rem' }}/>
        <p className="languageSelector">ENG</p>
        <img src="/downArrowIcon.png" alt="logo" style={{ height: '1.5rem', width: '1.5rem' }}/>
      </div>
    </header>
  );
};

export default Header;
