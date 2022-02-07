import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Coaches = () => {
  const coaches = useSelector((state) => state.COACH_DATA);
  const COACH_DATA = coaches;
  return (
    <>
      {COACH_DATA.map((coach) => (
        <Card  key={coach.key.toString()}>
          <h2>{coach.name}</h2>
          <li>{coach.email}</li>

          <Link to={`/coaches/${coach.key}`}>
            <Button>Show Details</Button>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default Coaches;
