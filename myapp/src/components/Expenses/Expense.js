import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpFilter from "./ExpFilter";
import ExpList from "./ExpList";

const Expense = (props) => {
  const [enteredFilter, setFilter] = useState("2020");

  const filterYear = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filteredArray = props.Item.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <div>
      <Card className="expense">
        <ExpFilter selected={enteredFilter} onFilterApply={filterYear} />
        <ExpList items = {filteredArray} />
      </Card>
    </div>
  );
};
export default Expense;
