import React from "react";
import "./team.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Team = () => {
  // variants
  //-----left container-----
  const teamAnimation1 = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const teamAnimation2 = {
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  // components animation
  const teamAnimationSlideUp = {
    hidden: {
      opacity: 0,
      y: 200,
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
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const teamAnimationSlideLeft = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
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
    <div className="Team">
      <motion.div
        className="inside-team-container"
        variants={teamAnimation1}
        initial="hidden"
        whileInView="show"
      >
        {/* top-container */}
        <motion.div
          className="team-top-container"
          variants={teamAnimationSlideUp}
        >
          <motion.div
            className="inside-team-top-container"
            variants={teamAnimation1}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="team-button"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { ease: "easeInOut", duration: 0.6 },
              }}
            >
              TEAM
            </motion.div>
            <motion.div
              className="team-description"
              variants={teamAnimationSlideLeft}
            >
              Learn successful team and football skills which will help you
              really change and improve your overall Skills! Take a clear and
              systematic approach to improve your technique. Learn from best in
              football with unlimited access to dozens of their study
              techinques.
            </motion.div>
          </motion.div>
        </motion.div>
        {/* bottom-container */}
        <motion.div
          className="team-bottom-container"
          variants={teamAnimation1}
          initial="hidden"
          whileInView="show"
        >
          <div className="inside-team-bottom-container">
            <div className="team-card">
              {/* individual team card 1 */}
              <motion.div
                className="inside-team-card"
                variants={teamAnimationSlideUp}
              >
                <div className="team-image-card">
                  <div className="inside-team-image-card">
                    <img
                      src={require("../../../assets/Home/team/ganesh_kamath_1.jpeg")}
                      alt="ganesh_kamath"
                      className="team-memeber-image2"
                    />
                  </div>
                </div>
                <motion.div
                  className="inside-team-description-card"
                  variants={teamAnimation2}
                  initial="hidden"
                  whileInView="show"
                >
                  <motion.div
                    className="team-member-name"
                    variants={teamAnimationSlideLeft}
                  >
                    Mr.Ganesh Kamath
                  </motion.div>
                  <motion.div
                    className="team-member-job-title"
                    variants={teamAnimationSlideLeft}
                  >
                    Head Coach & Founder
                  </motion.div>
                  <motion.div
                    className="team-member-words"
                    variants={teamAnimationSlideLeft}
                  >
                    -I have been in and around football for years now first as a
                    player now as a coach. My ideas and my philosophies are
                    simple yet complicated. Idea is to develop each and every
                    individual who comes at our doorstep to their utmost
                    potential.
                  </motion.div>
                </motion.div>
                <motion.div
                  className="team-learn-more-button"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { ease: "easeInOut", duration: 0.6 },
                  }}
                >
                  Learn More
                </motion.div>
              </motion.div>
              {/* individual team card 2 */}
              <motion.div
                className="inside-team-card"
                variants={teamAnimationSlideUp}
              >
                <div className="team-image-card">
                  <div className="inside-team-image-card">
                    <div className="team-memeber-image2"></div>
                    <img
                      src={require("../../../assets/Home/team/gautam_gopalkrishnan.jpeg")}
                      alt="gautam_gopalkrishnan"
                      className="team-memeber-image2"
                    />
                  </div>
                </div>
                <div
                  className="inside-team-description-card"
                  variants={teamAnimation2}
                  initial="hidden"
                  whileInView="show"
                >
                  <motion.div
                    className="team-member-name"
                    variants={teamAnimationSlideLeft}
                  >
                    Mr.Gautam Gopalkrishnan
                  </motion.div>
                  <motion.div
                    className="team-member-job-title"
                    variants={teamAnimationSlideLeft}
                  >
                    Strength and Conditioning Head
                  </motion.div>
                  <motion.div
                    className="team-member-words"
                    variants={teamAnimationSlideLeft}
                  >
                    I believe that providing the right environment is the most
                    important aspect for the young players coming in. If they
                    have that, kids are able to thrive in more than just the
                    on-field aspects. We at the academy want to create better
                    people first, better players after that.
                  </motion.div>
                </div>
                <motion.div
                  className="team-learn-more-button"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { ease: "easeInOut", duration: 0.6 },
                  }}
                >
                  Learn More
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Team;
