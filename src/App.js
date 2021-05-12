import logo from "./logo.svg";
import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tiolet Paper",
      amount: 5.3,
      date: new Date(2021, 5, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 255.23,
      date: new Date(2021, 5, 28),
    },
    {
      id: "e3",
      title: "Home Insurance",
      amount: 125.22,
      date: new Date(2021, 5, 28),
    },
    {
      id: "e4",
      title: "Testing Charges",
      amount: 25.23,
      date: new Date(2021, 5, 28),
    },
  ];

  return (
    <div className="App">
      <div>
        <h2>Let's get started</h2>
        <ExpenseList expenseList={expenses}></ExpenseList>
      </div>
    </div>
  );
}

export default App;
