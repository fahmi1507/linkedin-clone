import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widget__article">
        <div className="widget__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widget__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Frontend JavaScript News Brief (Q3 2021)", "Top News - 997 Readers")}
      {newsArticle("Frontend JavaScript News Brief (Q3 2021)", "Top News - 997 Readers")}
      {newsArticle("Frontend JavaScript News Brief (Q3 2021)", "Top News - 997 Readers")}
      {newsArticle("Frontend JavaScript News Brief (Q3 2021)", "Top News - 997 Readers")}
    </div>
  );
};

export default Widgets;
