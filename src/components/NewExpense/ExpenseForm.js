import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // const titleChangeHandeler = (event) => {
  //   setEnteredTitle(event.target.value);
  //   console.log(event.target.value);
  // };

  // const amountChangeHandeler = (event) => {
  //   setEnteredAmount(event.target.value);
  //   console.log(enteredAmount);
  // };

  // const dateChangeHandeler = (event) => {
  //   setEnteredDate(event.target.value);
  //   console.log(enteredDate);
  // };

  // React schedules all the state updates so belo approach may lead to issues when there are too many scheduled states, a possibility of using incorrect values i.e. latest version
  // const titleChangeHandeler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  //   console.log(event.target.value);
  // };

  // const amountChangeHandeler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  //   console.log(event.target.value);
  // };

  // const dateChangeHandeler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  //   console.log(event.target.value);
  // };

  // Below approach is correct way to ensure that the right previous state value is used.
  const titleChangeHandeler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    console.log(event.target.value);
  };

  const amountChangeHandeler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    console.log(event.target.value);
  };

  const dateChangeHandeler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    console.log(event.target.value);
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
