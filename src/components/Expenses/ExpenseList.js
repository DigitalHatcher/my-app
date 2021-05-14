import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const ExpenseList = (props) => {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const changeFilterHandeller = (enteredExpenseFilter) => {
    setEnteredFilter(enteredExpenseFilter);

    console.log("In Expense List.js");
    console.log(enteredExpenseFilter);
  };

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter
          selected={enteredFilter}
          onChangeFilterData={changeFilterHandeller}
        ></ExpensesFilter>
        <ExpenseItem
          title={props.expenseList[0].title}
          amount={props.expenseList[0].amount}
          date={props.expenseList[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseList[1].title}
          amount={props.expenseList[1].amount}
          date={props.expenseList[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseList[2].title}
          amount={props.expenseList[2].amount}
          date={props.expenseList[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseList[3].title}
          amount={props.expenseList[3].amount}
          date={props.expenseList[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default ExpenseList;
