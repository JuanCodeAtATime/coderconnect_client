import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import { signout, isAuth } from "../actions/auth";
// import Router from "next/router";
// import Link from "next/link";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import InfoIcon from "@material-ui/icons/Info";
// import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
// import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50px",
    position: "fixed",
    paddingTop: 4,
    paddingBottom: 4,
    // zIndex: 3,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,60%)",
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Categories"
        value="recents"
        icon={<FormatListBulletedIcon />}
        style={{
          color: "rgb(66, 139, 202)",
          fontSize: ".65rem",
        }}
      />

      <BottomNavigationAction
        label="About"
        value="recents"
        icon={<InfoIcon />}
        style={{
          color: "rgb(66, 139, 202)",
          fontSize: ".65rem",
        }}
      />
    </BottomNavigation>
  );
}
