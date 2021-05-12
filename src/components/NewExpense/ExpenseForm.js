import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandeler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };

  const dateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandeler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandeler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-01-01"
            onChange={dateChangeHandeler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
