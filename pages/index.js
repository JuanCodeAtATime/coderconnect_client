import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import { isAuth } from "../actions/auth";
import Link from "next/link";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Tooltip from "@material-ui/core/Tooltip";

import SettingsIcon from "@material-ui/icons/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBrain,
  faLaptopCode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Layout>
      <section
        className="container-fluid p-0 m-0"
        style={{ overflow: "hidden" }}
      >
        <div className="row justify-content-center landingTopSection m-0 p-0">
          <div className="col-md-12 col-lg-12 col-sm-6 col-xs-9">
            {isAuth() && isAuth().role === 0 && (
              <p style={{ color: "white", fontWeight: "400" }}>
                <em>{`Welcome, ${isAuth().name}`}</em>
              </p>
            )}
          </div>
          <div className="col-md-12 text-center" style={{ paddingTop: 10 }}>
            <img
              alt=""
              src="../static/images/cclogo.png"
              width="120px"
              height="120px"
              style={{
                zIndex: 3,
                textAlign: "center",
                borderRadius: 8,
                border: "solid white 1px",
              }}
            />{" "}
            {!isAuth() && (
              <Link href="/signup">
                <button className="btn btn-lg btn-warning m-1">
                  <b>Join</b>
                </button>
              </Link>
            )}
            <a href="/coderconnect-forum">
              <button className="btn btn-lg btn-primary m-1">
                <b>coderConnectForum</b>
              </button>
            </a>
            {isAuth() && isAuth().role === 0 && (
              <Link href="/user/blog">
                <button className="btn btn-warning btn-lg">
                  <Tooltip title="Ask A Question">
                    <ContactSupportIcon style={{ fontSize: "2rem" }} />
                  </Tooltip>
                </button>
              </Link>
            )}
            {isAuth() && isAuth().role === 0 && (
              <Link href="/user/crud/category-tag">
                <button className="btn btn-dark btn-lg">
                  <Tooltip title="My Settings">
                    <SettingsIcon style={{ fontSize: "2rem" }} />
                  </Tooltip>
                </button>
              </Link>
            )}
            {isAuth() && isAuth().role === 1 && (
              <Link href="/admin">
                <button
                  className="btn btn-md btn-danger m-1"
                  style={{ width: "170.28px" }}
                >
                  <b>{`${isAuth().name}'s Portal`}</b>
                </button>
              </Link>
            )}
          </div>

          <div
            className="col-md-12 text-center"
            style={{ padding: 0, margin: 0 }}
          ></div>
        </div>
        <div
          className="row justify-content-center p-0 m-0"
          style={{
            overflow: "hidden",
          }}
        >
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center p-0">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../static/images/codersinlounge.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../static/images/learn.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../static/images/sitting.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center"
            style={{
              backgroundColor: "rgb(66, 139, 202)",
              padding: 30,
              color: "white",
            }}
          >
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faBrain}
                style={{ fontSize: "4rem" }}
              />{" "}
            </span>

            <h5 style={{ marginBottom: 0, paddingBottom: 12 }}>
              <b>Connect</b>
            </h5>
            <p style={{ fontSize: "1.05rem" }}>
              Network with industry professionals and other like-minded
              goal-getters destined to break into the tech industry.
            </p>
          </div>

          <div
            className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center aboutSections"
            style={{
              backgroundColor: "black",
              padding: 30,
            }}
          >
            <span>
              {" "}
              <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "4rem" }} />
            </span>

            <h5 style={{ marginBottom: 0, paddingBottom: 12 }}>
              <b>Learn</b>
            </h5>
            <p style={{ fontSize: "1.05rem" }}>
              Featuring Q & A forums to get your questions answered and learn
              from others.
            </p>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center"
            style={{
              backgroundColor: "rgb(217,83,79)",
              padding: 30,
              color: "white",
            }}
          >
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ fontSize: "4rem" }}
              />{" "}
            </span>

            <h5 style={{ marginBottom: 0, paddingBottom: 12 }}>
              <b>Code</b>
            </h5>
            <p style={{ fontSize: "1.05rem" }}>
              Whether you're a pro or have never written a line of code,
              coderConnect is here to bridge the gap between code-curious and
              code-confident.
            </p>
          </div>
        </div>

        <div
          className="row justify-content-center bottomSection"
          style={{
            overflow: "hidden",

            paddingTop: 30,
            paddingBottom: 80,
          }}
        >
          <div
            className="col-lg-4 col-md-4 m-2 col-sm-12 col-xs-12 text-center"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: 30,
              color: "white",
            }}
          >
            <img
              src={"../static/images/cclogo.png"}
              width="175px"
              style={{ borderRadius: 8, marginBottom: 3 }}
            ></img>
            <p
              style={{
                fontSize: "1.05rem",
                color: "black",
                fontWeight: "600",
                fontSyle: "italics",
              }}
            >
              Sign up to start learning and networking your way into a career in
              tech.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-4 col-sm-12 m-2 col-xs-12 text-center"
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              padding: 30,
              color: "white",
            }}
          >
            <span>
              {" "}
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "4rem" }} />
            </span>

            <h5 style={{ marginBottom: 0, paddingBottom: 12 }}>
              <b>Become A Member</b>
            </h5>

            <p style={{ fontSize: "1.05rem" }}>
              Join the community today...It's free!
            </p>
            <div style={{ color: "rgb(66, 139, 202)" }}>
              {!isAuth() && (
                <Link href="/signup">
                  <small style={{ cursor: "pointer" }}>
                    <b>Signup</b> |
                  </small>
                </Link>
              )}

              {!isAuth() && (
                <Link href="/signin">
                  <small style={{ cursor: "pointer" }}>
                    {" "}
                    <b>Signin</b>
                  </small>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
