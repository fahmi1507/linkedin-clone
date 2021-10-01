import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import linkedinLogo from "./images/linkedin.svg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import avatar from "./images/avtr.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedinLogo} alt="" />

        <div className="header__search">
          {/* search icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption title="Chat" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption avatar={avatar} title="me" />
      </div>
    </div>
  );
};

export default Header;
