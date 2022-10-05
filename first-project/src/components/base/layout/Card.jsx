import "./Card.css";
import React from "react";

export default (props) => {
  const color = props.color || "red";

  const cardStyle = {
    backgroundColor: color,
    borderColor: color,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="title">{props.title}</div>
      <div className="content">{props.children}</div>
    </div>
  );
};
