import React from "react";
import "./ourservices.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EastIcon from "@mui/icons-material/East";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PeopleIcon from "@mui/icons-material/People";
import { motion, useInView, useIsPresent } from "framer-motion";

const OurServices = () => {
  


  // variants
  //-----left container-----
  const service = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const serviceCard = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardServiceComponent = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // ----------------------------------------
  // components animation
  const itemLeftService = {
    hidden: {
      opacity: 0,
      y: 400,
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

  const cardRightService = {
    hidden: {
      opacity: 0,
      y: 300,
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
      y: -100,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const scaleOutLeft = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
    exit: {
      scale: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const scaleOutRight = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    exit: {
      scale: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <div className="OurServiceHome">
      <motion.div
        className="inside-our-service-home-container"
        variants={service}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
      >
        <motion.div
          className="our-service-home-left-container"
          variants={itemLeftService}
          // viewport={{ once: true }}
        >
          <div className="inside-our-service-home-left-container">
            <img
              src={require("../../../assets/Home/ourService-footballer.jpg")}
              alt=""
              className="our-service-home-footballer-image"
            />
            <div className="our-service-home-left-content-container">
              <motion.div
                className="our-service-home-title"
                variants={scaleOutLeft}
              >
                OUR SERVICES
              </motion.div>
              <motion.div
                className="our-service-home-content"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", duration: 0.5 },
                }}
              >
                A place where knowledge and ideas empower coaches and athletes
              </motion.div>
            </div>
            <div className="our-service-home-link-container">
              <motion.div
                className="our-service-home-getstarted-button"
                variants={scaleOutLeft}
              >
                <div className="our-service-home-getstarted">Get Started</div>
                <div className="our-service-home-getstarted-arrow">
                  <EastIcon className="our-service-home-getstarted-arrow-image" />
                </div>
              </motion.div>
              <motion.div
                className="our-service-home-seeallfeatures-button"
                variants={scaleOutLeft}
              >
                See all features
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* right component */}

        <motion.div className="our-service-home-right-container">
          <motion.div
            className="inside-our-service-home-right-container"
            variants={serviceCard}
            initial="hidden"
            whileInView="show"
          >
            {/* card1 */}
            <motion.div
              className="our-service-home-card-container"
              variants={cardRightService}
            >
              <motion.div
                className="inside-our-service-card-container"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="our-services-icon-container"
                  variants={scaleOutRight}
                >
                  <EditNoteIcon className="our-services-home-icon" />
                </motion.div>
                <motion.div
                  className="our-service-home-name"
                  variants={scaleOutRight}
                >
                  Theory Sessions
                </motion.div>
                <motion.div
                  className="our-service-home-detail"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { ease: "easeInOut", duration: 0.6 },
                  }}
                >
                  First things first, our players are brought up to speed about
                  all the rules and best tactics for football.
                </motion.div>
              </motion.div>
            </motion.div>

            {/* card2 */}
            <motion.div
              className="our-service-home-card-container"
              variants={cardRightService}
            >
              <motion.div
                className="inside-our-service-card-container"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="our-services-icon-container"
                  variants={scaleOutRight}
                >
                  <FitnessCenterIcon className="our-services-home-icon" />
                </motion.div>
                <motion.div
                  className="our-service-home-name"
                  variants={scaleOutRight}
                >
                  Suitable Training
                </motion.div>
                <motion.div
                  className="our-service-home-detail"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { ease: "easeInOut", duration: 0.6 },
                  }}
                >
                  Overall agility and flexibility is highly affected through our
                  training. This works especially well when we start early
                </motion.div>
              </motion.div>
            </motion.div>

            {/* card3 */}
            <motion.div
              className="our-service-home-card-container"
              variants={cardRightService}
            >
              <motion.div
                className="inside-our-service-card-container"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="our-services-icon-container"
                  variants={scaleOutRight}
                >
                  <MilitaryTechIcon className="our-services-home-icon" />
                </motion.div>
                <motion.div
                  className="our-service-home-name"
                  variants={scaleOutRight}
                >
                  Tournament Exposure
                </motion.div>
                <motion.div
                  className="our-service-home-detail"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { ease: "easeInOut", duration: 0.6 },
                  }}
                >
                  We train like MDFA. Our players experience what it's like to
                  play with their team at these leagues.
                </motion.div>
              </motion.div>
            </motion.div>

            {/* card4 */}
            <motion.div
              className="our-service-home-card-container"
              variants={cardRightService}
            >
              <motion.div
                className="inside-our-service-card-container"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="our-services-icon-container"
                  variants={scaleOutRight}
                >
                  <PeopleIcon className="our-services-home-icon" />
                </motion.div>
                <motion.div
                  className="our-service-home-name"
                  variants={scaleOutRight}
                >
                  1v1 Training
                </motion.div>
                <motion.div
                  className="our-service-home-detail"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { ease: "easeInOut", duration: 0.6 },
                  }}
                >
                  At HHSS we do 1v1 training to eliminate all the weaknesses
                  from your game.
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurServices;
