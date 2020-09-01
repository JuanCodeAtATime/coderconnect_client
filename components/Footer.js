import React from "react";
import { isAuth } from "../actions/auth";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer color="blue" className="font-small pt-4 mt-4 pb-4">
        <div className="footer-container">
          <div className="row text-center">
            <div className="col-md-3 pb-2 footerLogo pr-0">
              <h3 style={{ color: "#8d54b5", marginBottom: 0 }}>MILSERV</h3>
              <p style={{ color: "#8d54b5", marginBottom: 1 }}>
                Copyright <span>&copy;</span>MILSERV <br /> American Craft
                Deliveries, Corp 2020{" "}
              </p>

              {!isAuth() && (
                <Link href="/signin">
                  <p
                    className="footer-items staff-signin"
                    style={{
                      padding: 6,
                      borderRadius: 4,
                      backgroundColor: "#8d54b5",
                      color: "white",
                      display: "inline-block",
                      marginBottom: 6,
                    }}
                  >
                    Staff Portal
                  </p>
                </Link>
              )}

              <p className="footer-items">
                <a
                  href="http://juancode.com"
                  target="_blank"
                  style={{
                    marginBottom: 5,
                    color: "#8d54b5",
                    textDecoration: "none",
                  }}
                >
                  Site by juan
                  <FontAwesomeIcon icon={faGlobe} />
                  Code
                </a>
              </p>
            </div>
            <div className="col-md-2 pb-2 pr-0" id="footer-links">
              <h6 className="title">PARTNERS</h6>
              <p className="footer-items">
                <a href="#">MAKERS</a>
              </p>
              <p className="footer-items">
                <a href="/retailers">RETAILERS</a>
              </p>
              <p className="footer-items">
                <a href="/distributors">DISTRIBUTORS</a>
              </p>
            </div>
            <div className="col-md-2 pb-2 pr-0" id="footer-links">
              <h6 className="title">VETERANS</h6>
              <p className="footer-items">
                <a href="/veteran-jobs">JOBS</a>
              </p>

              <p className="footer-items">
                {" "}
                <a href="#">GIVING BACK</a>
              </p>
            </div>
            <div className="col-md-2 pb-2 pr-0" id="footer-links">
              <h6 className="title">NEWS</h6>
              <p className="footer-items">
                <a href="/milserv-media">MILSERV MEDIA</a>
              </p>
              <p className="footer-items">
                {" "}
                <a href="/milserv-media">PRESS RELEASES</a>{" "}
              </p>
              <p className="footer-items">
                <a href="#">STAY CONNECTED</a>{" "}
              </p>
            </div>
            <div className="col-md-1 pb-2 pr-0" id="footer-links">
              <a href="https://dodskillbridge.usalearning.gov/index.htm">
                <img
                  width="120px"
                  height="74px"
                  src={"../static/images/skillbridge.png"}
                  alt="Veteran Owned Business logo"
                ></img>
              </a>
            </div>
            <div className="col-md-2 pr-0" id="footer-links">
              <img
                width="100px"
                src={"../static/images/vetownedbiz.png"}
                alt="Veteran Owned Business logo"
              ></img>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
