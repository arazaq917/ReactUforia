import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/UI/Card";

const CoachDetail = () => {
  const coaches = useSelector((state) => state.COACH_DATA);
  const COACH_DATA = coaches;
  const params = useParams();
  console.log(params.id);
  const coach = COACH_DATA.find((e) => e.key === params.id);
  console.log(coach);
  return (
    <div>
      <Card>
        <h2>{coach.name}</h2>
        <h3>{coach.email}</h3>
        <p>{coach.desc} </p>
      </Card>
    </div>
  );
};

export default CoachDetail;
