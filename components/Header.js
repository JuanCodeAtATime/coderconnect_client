import { useState } from "react";
import Link from "next/link";
// import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import Tooltip from "@material-ui/core/Tooltip";

import ".././node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Nav
        style={{
          backgroundColor: "rgb(0,0,0)",
          margin: 0,
          paddingBottom: 0,
          zIndex: 4,
          position: "relative",
        }}
      >
        {/* {isAuth() && isAuth().role === 0 && (
          <Link href="/user">
            <Nav.Item
              className="listItems mr-0 ml-8 mt-0 mb-0 justify-content-end"
              style={{ position: "absolute" }}
            >
              {`${isAuth().name}'s Portal`}
            </Nav.Item>
          </Link>
        )} */}
        {!isAuth() && (
          <Link href="/signin">
            <Nav.Item
              className="listItems m-0 justify-content-right"
              style={{ position: "absolute" }}
            >
              <Tooltip title="Member Login">
                <IconButton aria-label="account">
                  <AccountCircleOutlinedIcon
                    style={{ color: "white", fontSize: "2rem" }}
                  />{" "}
                </IconButton>
              </Tooltip>
              <small style={{ color: "white" }}>login</small>
            </Nav.Item>
          </Link>
        )}

        {isAuth() && (
          <Nav.Item>
            <Nav.Link
              className="signout m-0"
              style={{ position: "absolute" }}
              onClick={() => signout(() => Router.replace("/signin"))}
            >
              <Tooltip title="Logout">
                <IconButton aria-label="logout">
                  <MeetingRoomIcon
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </IconButton>
              </Tooltip>
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>

      <Search />
    </React.Fragment>
  );
};

export default Header;
