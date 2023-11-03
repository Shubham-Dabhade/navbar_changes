import React, { useState } from "react";
import "./nav.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { menuSlide } from "../anim";
import Link from "./Link/Link";
import Curve from "./Curve/Curve";
import Footer from "./Footer/Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Coach",
    href: "/coach",
  },
  {
    title: "Achievement",
    href: "/achievement",
  },
];

const Nav = () => {
  const pathname = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="menu-body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
