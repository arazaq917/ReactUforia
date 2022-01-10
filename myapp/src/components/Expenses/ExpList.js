import React from "react";
import ExpItem from "./ExpItem";
import "./ExpList.css";

const ExpList = (props) => {
  let contentFilter = <p>Content not found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Record Not Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpList;
