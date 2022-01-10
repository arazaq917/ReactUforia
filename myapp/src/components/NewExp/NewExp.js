import React from "react";
import NewExpForm from "./NewExpForm";
import "./NewExp.css";

const NewExp = (props) => {
  const enteredFormData = (expenseData) => {
    const enteredData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(enteredData);
  };
  return (
    <div className="new-expense">
      <NewExpForm onSaveData={enteredFormData} />
    </div>
  );
};
export default NewExp;
