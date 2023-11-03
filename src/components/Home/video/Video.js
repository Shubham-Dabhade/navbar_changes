import React from "react";
import "./video.css";
import { motion } from "framer-motion";

const Video = () => {
  // variants
  //----------
  const videoVar1 = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },

  };

  // ----------------------------------------
  // components animation
  const videoPopUpAnimation = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
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

  const videoPopLeftAnimation = {
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

  const videoPopOutAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <div className="Video">
      <motion.div
        className="inside-video-home-container"
        variants={videoVar1}
        initial="hidden"
        whileInView="show"
      >
        {/* top container */}
        <motion.div
          className="top-video-home-container"
          variants={videoPopLeftAnimation}
        >
          <div className="inside-top-video-home-container">
            <div className="top-left-video-description">
              <div className="inside-top-left-video-description-container">
                <motion.div className="top-left-video-container-title" variants={videoPopOutAnimation}>
                  VIDEO GALLERY
                </motion.div>
                <motion.div className="top-left-video-container-youtube-description" variants={videoPopLeftAnimation}>
                  Elevate your game with top-notch football training tips and
                  drills. Improve your skills on and off the field.
                </motion.div>
                <a
                  href="https://www.youtube.com/@hhssentertainment4211/featured"
                  target="_blank"
                  className="video-watch-now"
                >
                  <motion.div className="video-watch-now-button" variants={videoPopOutAnimation}>Watch now!</motion.div>
                </a>
              </div>
            </div>
            <div className="top-right-video-container">
              <div className="inside-top-right-video-container">
                <iframe
                  className="youtube-embedded-video"
                  src="https://www.youtube.com/embed/l51_S9QmjdI?si=0zT3uI0Ep1mZhWKR"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
        {/* bottom container */}
        <div className="bottom-video-home-container">
          <motion.div
            className="inside-bottom-video-home-container"
            variants={videoVar1}
            initial="hidden"
            whileInView="show"
          >
            <motion.div className="bottom-video-home-youtube-container" variants={videoPopUpAnimation}>
              <div className="embedded-youtube-video-container">
                <iframe
                  className="youtube-embedded-video"
                  src="https://www.youtube.com/embed/r08qj5Zm-lA?si=c0Y69pn1DAj6vB2H"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <motion.div className="youtube-video-desciption-bottom" variants={videoPopLeftAnimation}>
                Improve skills, agility, and tactics. Join us for top-tier
                coaching!
              </motion.div>
            </motion.div>
            <motion.div className="bottom-video-home-youtube-container" variants={videoPopUpAnimation}>
              <div className="embedded-youtube-video-container">
                <iframe
                  className="youtube-embedded-video"
                  src="https://www.youtube.com/embed/oGf4sTIE4JU?si=iVoDOYzavakxOtop"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <motion.div className="youtube-video-desciption-bottom" variants={videoPopLeftAnimation}>
                Unlock your full potential with personalized 1v1 football
                training
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Video;
