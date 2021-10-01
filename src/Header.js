import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";
import linkedinLogo from "./images/linkedin.svg";
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
