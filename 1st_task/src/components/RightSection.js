import React from "react";
import { useSelector } from "react-redux";
import "./RightSection.css";

const RightSection = () => {
  const items = useSelector((state) => state.itemReducer.item);

  return (
    <>
      <div className="right">
        <h2>Right Section</h2>
        <div>
          {items.map((m) => (
            <p key={Math.random().toString()} >{m}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSection;
