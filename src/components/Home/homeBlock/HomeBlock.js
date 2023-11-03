import React, { useEffect, useRef, useState } from "react";
import "./homeBlock.css";
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

const HomeBlock = () => {
  const [imageLoc, setImageLoc] = useState(100);
  const imageRef = useRef();
  const homeContainer = useRef(null);
  // const isInView = useInView(homeContainer, {once:true});
  // const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: homeContainer,
    offset: ["end end", "end start"],
  });

  const opacityStart = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleImageLoc = (dir) => {
    if (dir === "left") {
      if (imageLoc <= -50) {
        setImageLoc(100);
      } else {
        setImageLoc(imageLoc - 100);
      }
    }
    if (dir === "right") {
      if (imageLoc >= 50) {
        setImageLoc(-100);
      } else {
        setImageLoc(imageLoc + 100);
      }
    }
  };

  //Variants-------------------------------
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const ball = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const elementScale = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  // ----------------------------------------
  // components animation
  const item = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -400,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const itemSide = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      y: -300,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  // small elements animation
  //-----------left block----------------
  const letterAnimation = {
    initial: {
      x: 400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const ballAnimation = {
    initial: {
      x: 400,
      y: 400,
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const elementScaleAnimation = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      handleImageLoc("left");
    }, 5000);
  }, [imageLoc]);

  return (
    <motion.div
      className="inside-home-container"
      key="inside-home-container"
      ref={homeContainer}
    >
      <motion.div
        className="inside-home-container-left"
        variants={container}
        initial="hidden"
        whileInView="show"
        // onViewportLeave="exit"
      >
        <motion.div
          className="left-home-container-top-block-motion"
          variants={item}
        >
          <motion.div
            className="left-home-container-top-block"
            variants={banner}
            initial="initial"
            animate="animate"
          >
            <div className="free-circle-1"></div>
            <div className="free-circle-2"></div>
            <motion.div
              className="home-left-football-image-container"
              variants={ball}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="ball-animation-container"
                style={{ background: "none" }}
                variants={ballAnimation}
              >
                <img
                  className="home-left-football-image"
                  src={require("../../../assets/Home/football.png")}
                  alt=""
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="left-home-top-block-title"
              variants={letterAnimation}
            >
              Take your game to the next level
            </motion.div>
            <div className="left-home-top-block-button">
              <div className="left-home-button-text">
                Start 7-day free trial
              </div>
              <ArrowForwardIcon className="arrow-forward-icon" />
            </div>
          </motion.div>
        </motion.div>
        <div className="left-home-container-bottom-block">
          <motion.div
            className="left-home-container-bottom-block-left"
            variants={item}
          >
            <div className="left-home-bottom-image-container">
              <img
                className="footballer-bottom-image"
                src={require("../../../assets/Home/new/footballer_4_new.jpg")}
                alt=""
              />
              <img
                className="footballer-bottom-image1"
                src={require("../../../assets/Home/new/footballer_5_new.jpg")}
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            className="left-home-container-bottom-block-right-motion"
            variants={item}
          >
            <motion.div
              className="left-home-container-bottom-block-right"
              variants={banner}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="bottom-left-block-home-title"
                variants={letterAnimation}
              >
                100+
              </motion.div>
              <motion.div
                className="bottom-left-block-home-content"
                variants={letterAnimation}
              >
                Challenges & Courses
              </motion.div>
              <div className="bottom-left-home-button">
                <div className="bottom-left-home-button-content">
                  Learn More
                </div>
                <ArrowForwardIcon className="arrow-forward-icon" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="inside-home-container-motion"
        variants={container}
        initial="hidden"
        whileInView="show"


      >
        <motion.div className="inside-home-container-right" variants={itemSide}>
          <div
            className="image-slider-arrow-left-container"
            onClick={() => handleImageLoc("left")}
          >
            <svg
              className="image-slider-arrow-left"
              viewBox="0 0 24 24"
              fill="f0f0f0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                fill="rgba(255, 255, 255)"
              />
            </svg>
          </div>
          <div
            className="image-slider-arrow-right-container"
            onClick={() => handleImageLoc("right")}
          >
            <svg
              className="image-slider-arrow-right"
              viewBox="0 0 24 24"
              fill="f0f0f0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                fill="rgba(255, 255, 255)"
              />
            </svg>
          </div>
          <div className="right-home-footballer-image-container">
            <img
              className="footballer-right-1"
              src={require("../../../assets/Home/new/footballer_1_new.JPG")}
              alt=""
              ref={imageRef}
              style={{ transform: `translateX(${imageLoc}%)` }}
            />
            <img
              className="footballer-right-1"
              src={require("../../../assets/Home/new/footballer_2_new.jpg")}
              alt=""
              ref={imageRef}
              style={{ transform: `translateX(${imageLoc}%)` }}
            />
            <img
              className="footballer-right-1"
              src={require("../../../assets/Home/new/footballer_3_new.JPG")}
              alt=""
              ref={imageRef}
              style={{ transform: `translateX(${imageLoc}%)` }}
            />
          </div>
          <motion.div
            className="home-right-block-aboutus-snippet-container"
            variants={elementScale}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="home-right-block-aboutus-button"
              variants={elementScaleAnimation}
            >
              ABOUT US
            </motion.div>
            <motion.div
              className="home-right-block-aboutus-content"
              variants={elementScaleAnimation}
            >
              Exclusive mini-courses and articles designed to make sports
              science more approachable, from the best performance practioners
              in sport.
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeBlock;
