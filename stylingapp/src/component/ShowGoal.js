import React from "react";
import "./ShowGoal.css";

const ShowGoal = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p> {props.desc} </p>
    </div>
  );
};
export default ShowGoal;
