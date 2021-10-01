import React from "react";
import "./InputOptions.css";

const InputOptions = ({ Icon, color, title }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color, marginRight: "5px" }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
