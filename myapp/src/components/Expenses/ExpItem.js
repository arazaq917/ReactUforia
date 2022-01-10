import React from "react";
import Card from "../UI/Card";
import ExpDate from "./ExpDate";
import "./ExpenseItem.css";

const ExpItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpItem;
