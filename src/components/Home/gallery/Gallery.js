import React from "react";
import "./gallery.css";
import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";

const Gallery = () => {
  // variants
  //----------
  const galleryVar1 = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  // ----------------------------------------
  // components animation
  const galleryPopUpAnimation = {
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

  const galleryPopLeftAnimation = {
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

  const galleryPopOutAnimation = {
    hidden: {
      opacity: 0,
      scale:0,
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
    <div className="Gallery">
      <motion.div
        className="inside-home-gallery-component"
        variants={galleryVar1}
        initial="hidden"
        whileInView="show"
      >
        {/* first column */}
        <motion.div
          className="first-home-gallery-component"
          variants={galleryPopUpAnimation}
        >
          <motion.div
            className="inside-first-home-gallery-component"
            variants={galleryVar1}
            initial="hidden"
            whileInView="show"
          >
            <div className="inside-first-top-gallery-component">
              <motion.div className="home-gallery-button" variants={galleryPopOutAnimation}>GALLERY</motion.div>
              <motion.div
                className="home-gallery-description"
                variants={galleryPopLeftAnimation}
              >
                Explore the thrilling world of football through captivating
                images and iconic moments in our football gallery.
              </motion.div>
              <motion.div className="home-gallery-see-more-button" variants={galleryPopOutAnimation}>
                See more <EastIcon className="home-gallery-arrow-icon" />
              </motion.div>
            </div>
            <motion.div
              className="gallery-home-image-title"
              variants={galleryPopLeftAnimation}
            >
              Practice
            </motion.div>
            <img
              src={require("../../../assets/Home/gallery/training_1.jpg")}
              alt="training"
              className="first-home-gallery-component-image-training"
            />
          </motion.div>
        </motion.div>
        {/* second column */}
        <motion.div
          className="second-home-gallery-component"
          variants={galleryPopUpAnimation}
        >
          <motion.div
            className="inside-second-home-gallery-component"
            variants={galleryVar1}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="gallery-home-image-title"
              variants={galleryPopLeftAnimation}
            >
              Training
            </motion.div>
            <img
              src={require("../../../assets/Home/gallery/practice.jpg")}
              alt="practice"
              className="second-home-gallery-image-practice"
            />
          </motion.div>
        </motion.div>

        {/* third column */}
        <div className="third-home-gallery-component">
          <motion.div
            className="inside-third-home-gallery-component"
            variants={galleryVar1}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="third-top-home-gallery-component"
              variants={galleryPopLeftAnimation}
            >
              <motion.div className="inside-third-top-home-gallery-component">
                <motion.div
                  className="gallery-home-image-title"
                  variants={galleryPopLeftAnimation}
                >
                  Team
                </motion.div>
                <img
                  src={require("../../../assets/Home/gallery/team2.jpeg")}
                  alt="team"
                  className="third-top-home-image-teams"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="third-bottom-home-gallery-component"
              variants={galleryPopLeftAnimation}
            >
              <motion.div
                className="inside-third-bottom-home-gallery-component"
                variants={galleryVar1}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="gallery-home-image-title"
                  variants={galleryPopLeftAnimation}
                >
                  Champs
                </motion.div>
                <img
                  src={require("../../../assets/Home/gallery/champ3.jpeg")}
                  alt="champ"
                  className="third-bottom-home-image-champs"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* responsive */}
      <div className="third-home-gallery-component1">
        <motion.div
          className="inside-third-home-gallery-component1"
          variants={galleryVar1}
          initial="hidden"
          whileInView="show"
        >
          <motion.div className="third-top-home-gallery-component1" variants={galleryPopUpAnimation}>
            <motion.div
              className="inside-third-top-home-gallery-component1"
              variants={galleryVar1}
              initial="hidden"
              whileInView="show"
            >
              <motion.div
                className="gallery-home-image-title"
                variants={galleryPopLeftAnimation}
              >
                Team
              </motion.div>
              <img
                src={require("../../../assets/Home/gallery/team2.jpeg")}
                alt="team"
                className="third-top-home-image-teams1"
              />
            </motion.div>
          </motion.div>
          <motion.div className="third-bottom-home-gallery-component1" variants={galleryPopUpAnimation}>
            <motion.div
              className="inside-third-bottom-home-gallery-component1"
              variants={galleryVar1}
              initial="hidden"
              whileInView="show"
            >
              <motion.div
                className="gallery-home-image-title"
                variants={galleryPopLeftAnimation}
              >
                Champs
              </motion.div>
              <img
                src={require("../../../assets/Home/gallery/champ3.jpeg")}
                alt="champ"
                className="third-bottom-home-image-champs1"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
