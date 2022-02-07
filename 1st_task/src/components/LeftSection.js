import React from "react";
import "./LeftSection.css";
import { useDispatch} from "react-redux";
import { ItemAction } from "../store/addItem";

const LeftSection = (props) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(ItemAction.addItem("Add text"));
    dispatch(ItemAction.movable(".target"));

  };
  return (
    <div className="left">
      <h2>Left Section</h2>
      <button className="btn" onClick={addItem}>Add Text</button>
      <button className="btn2" onClick={addItem}>Add Large Text</button>
    </div>
  );
};

export default LeftSection;
