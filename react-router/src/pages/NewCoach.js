import React, { useState } from "react";
import classes from "./NewCoach.module.css";
import Button from "../components/UI/Button";
import "../index.css";
import { useDispatch } from "react-redux";
import { coachAction } from "../store/coachesSlice";
import { useHistory } from "react-router-dom";

const NewCoach = () => {
  const history = useHistory();

  const [coachName, setCoach] = useState("");
  const [coachEmail, setCoachEmail] = useState("");
  const [coachDesc, setCoachDesc] = useState("");

  const nameHandler = (event) => {
    setCoach(event.target.value);
  };

  const emailHandler = (event) => {
    setCoachEmail(event.target.value);
  };

  const descHandler = (event) => {
    setCoachDesc(event.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      coachAction.getInput({
        coachName,
        coachEmail,
        coachDesc,
      })
    );
    setCoach("");
    setCoachEmail("");
    setCoachDesc("");
    history.replace("/");
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Coach Name</label>
          <input type="text" value={coachName} onChange={nameHandler} />
        </div>
        <div>
          <label htmlFor="email">Coach Email</label>
          <input type="email" value={coachEmail} onChange={emailHandler} />
        </div>
        <div>
          <label htmlFor="desc">Coach Email</label>
          <textarea rows="3" value={coachDesc} onChange={descHandler} />
        </div>
        <h3>Area of field</h3>
        <div className="checkbox">
          <input type="checkbox" value="frontend" id="frontend" />
          <label htmlFor="frontend">Frontend Development</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="backend" id="backend" />
          <label htmlFor="backend">Backend Development</label>
        </div>
        {/* <div>
          <Button>Submit</Button>
        </div> */}
      </form>
    </div>
  );
};

export default NewCoach;
