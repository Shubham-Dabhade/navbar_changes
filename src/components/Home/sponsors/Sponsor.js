import React from "react";
import "./sponsor.css";
import { motion } from "framer-motion";

const Sponsor = () => {
  // variants
  //----------
  const sponsorVar = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  // components animation
  const sponsorPopUpAnimation = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const sponsorPopLeftAnimation = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <div className="our-sponsor-container">
      <motion.div
        className="our-sponsor-inner-container"
        variants={sponsorVar}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className="our-sponsor-top-container"
          variants={sponsorPopUpAnimation}
        >
          <div className="our-sponsor-inner-top-container">
            <motion.div
              className="our-sponsor-title"
              variants={sponsorPopLeftAnimation}
            >
              Our Sponsor
            </motion.div>
            <motion.div
              className="our-sponsor-description"
              variants={sponsorPopLeftAnimation}
            >
              Your commitment to providing essential energy nutrients to
              athletes and the general public is making a real impact. Your
              partnership means the world to us, and we're proud to have{" "}
              <i>
                <b>Carnival </b>
              </i>{" "}
              by our side.
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="our-sponsor-bottom-container"
          variants={sponsorVar}
          initial="hidden"
          whileInView="show"
        >
          <div className="our-sponsor-inner-bottom-container">
            <motion.div
              className="sponsor-image-container"
              variants={sponsorPopUpAnimation}
            >
              <img
                className="sponsor-images"
                src={require("../../../assets/Sponsor/sponsor-1.jpeg")}
                alt="carnvial_sponsor"
              />
            </motion.div>
            <motion.div
              className="sponsor-image-container"
              variants={sponsorPopUpAnimation}
            >
              <img
                className="sponsor-images"
                src={require("../../../assets/Sponsor/sponsor-2.jpeg")}
                alt="carnvial_sponsor"
              />
            </motion.div>
            <motion.div
              className="sponsor-image-container"
              variants={sponsorPopUpAnimation}
            >
              <img
                className="sponsor-images"
                src={require("../../../assets/Sponsor/sponsor-3.jpeg")}
                alt="carnvial_sponsor"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsor;
