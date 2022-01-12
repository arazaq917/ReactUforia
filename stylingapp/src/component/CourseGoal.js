import React, { useState } from "react";
import "./CourseGoal.css";
// import ShowGoal from "./ShowGoal";

const CourseGoal = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDesc, setGoalDesc] = useState("");
  const [isValid, setIsValid] = useState(true);

  const titleListner = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setTitle(event.target.value);
  };
  const descListner = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setGoalDesc(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0 || enteredDesc.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const goal = {
      title: enteredTitle,
      desc: enteredDesc,
      key: Math.random().toString(),
    };
    props.sendToApp(goal);
  };

  return (
    <div className="mainDiv">
      <header>
        <h1>Course Goal App</h1>
      </header>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className={`form-control ${!isValid ? "invalid" : ""}`}>
            <label>Goal Title</label>
            <input
              type="text"
              id="addGoal"
              value={enteredTitle}
              onChange={titleListner}
            />
          </div>
          <div className={`form-control ${!isValid ? "invalid" : ""}`}>
            <label>Goal Description</label>
            <textarea
              type="text"
              id="goalDesc"
              rows="3"
              value={enteredDesc}
              onChange={descListner}
            />
          </div>
          <button type="submit">Add Goal</button>
        </form>
      </div>
    </div>
  );
};
export default CourseGoal;
