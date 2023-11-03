import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useAnimationControls,
  useInView,
  useIsPresent,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeBlock from "../../components/Home/homeBlock/HomeBlock";
import OurServices from "../../components/Home/ourServices/OurServices";
import Team from "../../components/Home/team/Team";
import Gallery from "../../components/Home/gallery/Gallery";
import Video from "../../components/Home/video/Video";
import Sponsor from "../../components/Home/sponsors/Sponsor";

const Home = () => {

  return (
    <motion.div className="Home" key="inside-home-container">
        <HomeBlock/>
        <OurServices/>
        <Team/>
        <Gallery/>
        <Sponsor/>
        <Video/>
    </motion.div>
  );
};

export default Home;
