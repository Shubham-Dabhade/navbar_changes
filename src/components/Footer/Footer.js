import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inside-footer-container">
        <div className="top-footer-container">
          {/* name - logo container */}
          <div className="school-name-description-container">
            <div className="school-name-footer">
              <a href="/new_hungryheartsscoccerschool">
                <div className="school-logo-container">
                  <img
                    src={require("../../assets/Footer/badge.png")}
                    className="school-logo"
                    alt="hhss_logo"
                  />
                </div>
                <div className="school-name">HHSS</div>
              </a>
            </div>
            <div className="school-joining-buttons-container">
              <div className="join-hhss-button">Join HHSS</div>
              <div className="get-demo-hhss-button">Get Demo</div>
            </div>
            <div className="school-links-footer">
              <div className="school-link-container">
                <a
                  href="https://www.youtube.com/channel/UCq3oFywxSkOPA49wycjpzmw"
                  target="_blank"
                >
                  <div className="link-color-yt">
                    <img
                      src={require("../../assets/Footer/youtube-color.png")}
                      alt=""
                      className="link-color-image"
                    />
                  </div>
                  <div className="link-no-color-yt">
                    <img
                      src={require("../../assets/Footer/youtube-no-color.png")}
                      alt=""
                      className="link-no-color-image"
                    />
                  </div>
                </a>
              </div>
              <div className="school-link-container">
                <a
                  href="https://www.instagram.com/hhssofficialpage/"
                  target="_blank"
                >
                  <div className="link-color">
                    <img
                      src={require("../../assets/Footer/instagram-color.png")}
                      alt=""
                      className="link-color-image"
                    />
                  </div>
                  <div className="link-no-color">
                    <img
                      src={require("../../assets/Footer/instagram-no-color.png")}
                      alt=""
                      className="link-no-color-image"
                    />
                  </div>
                </a>
              </div>
              <div className="school-link-container">
                <a href="https://www.facebook.com/hhss26/" target="_blank">
                  <div className="link-color">
                    <img
                      src={require("../../assets/Footer/facebook-color.png")}
                      alt=""
                      className="link-color-image"
                    />
                  </div>
                  <div className="link-no-color">
                    <img
                      src={require("../../assets/Footer/facebook-no-color.png")}
                      alt=""
                      className="link-no-color-image"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* teams container */}
          <div className="school-teams-container">
            <div className="link-container-header">Teams</div>
            <ul className="ul-container-info-links">
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Under-7
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Under-9
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Under-11
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Under-13
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Under-15
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Under-17
                </a>
              </li>
            </ul>
          </div>
          <div className="about-academy-description-container">
            <div className="link-container-header">Academy</div>
            <ul className="ul-container-info-links">
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Our Team
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Programme
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="school-home-page-navigator-container">
            <div className="link-container-header">Platform</div>
            <ul className="ul-container-info-links">
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Home
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  About
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Coach
                </a>
              </li>
              <li className="list-info-link">
                <a href="#" className="list-links">
                  Achievement
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer-container">
          © 2023 HungryHeartsSoccerSchool(HHSS)
        </div>
      </div>
    </div>
  );
};

export default Footer;
