import React, { useState } from "react";
import "./App.css";
import CourseGoal from "./component/CourseGoal";
import ShowGoal from "./component/ShowGoal";

function App() {
  const [goal, setGoal] = useState([]);
  const recievedAppData = (data) => {
    setGoal([data, ...goal]);
  };
  return (
    <div className="App">
      <CourseGoal sendToApp={recievedAppData} />
      {goal.map(g=>
        <ShowGoal
        key = {g.key}
        title = {g.title}
        desc = {g.desc}
        />
      )}
    </div>
  );
}
export default App;
