import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router-dom";
import Nav from "../nav/Nav";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <div className="Navbar">
      <div className="inside-navbar-container">
        <div className="navbar-element-left">
          <div className="navbar-element-left-button">Get Demo</div>
        </div>
        
        <div className="navbar-element-center"><a href="/" style={{textDecoration:'none', color:'black', fontWeight:"700"}}>HHSS</a></div>
        <div className="navbar-element-right">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`button ${isActive ? "button-op" : ""}`}
          >
            <div
              className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
      {isActive && <Nav/>}
    </AnimatePresence>
    </div>
  );
};

export default Navbar;
