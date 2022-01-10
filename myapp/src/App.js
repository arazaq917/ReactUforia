import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExp from "./components/NewExp/NewExp";

const expenses_arr = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpensesArr] = useState(expenses_arr);
  const addExpense = (expense) => {
    setExpensesArr((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className="App">
      <NewExp onAddExpense={addExpense} />
      <Expense Item={expenses} />
    </div>
  );
};

export default App;
