import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import bg from "./images/bg.svg";
const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bg} alt="bg" />
        <Avatar className="sidebar__avatar" />
        <h2>Michael Scott</h2>
        <h4>michaelscott@gmail.com</h4>
      </div>

      {/* sidebar stat */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">2,000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Posts</p>
          <p className="sidebar__statNumber">2,342</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("developer")}
        {recentItem("javascript")}
        {recentItem("reactjs")}
        {recentItem("flutter")}
      </div>
    </div>
  );
};

export default Sidebar;
