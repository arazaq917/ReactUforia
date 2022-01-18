import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const AmountNum = +enteredAmount;
    if (enteredAmount.trim().length === 0 || AmountNum < 1 || AmountNum > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(AmountNum);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid Amount</p>}
    </form>
  );
};

export default MealForm;
