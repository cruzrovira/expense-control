import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Budget from "./components/budget";
import Control from "./components/control";
const AppStyled = styled.div`
  .container {
    width: 80%;
    max-width: 1024px;
    margin: auto;
  }
  h1 {
    color: #fafdff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
`;

const App = () => {
  let [budget, setBuget] = useState(0);
  let [expenseList, setExpenseList] = useState([]);
  let [totalExpense, setTotalExpense] = useState(0);

  const addBuget = (amount) => {
    setBuget(amount);
  };
  const addExpenseList = (expense) => {
    setExpenseList([...expenseList, expense]);
    setTotalExpense(totalExpense + expense.amount);
  };
  return (
    <AppStyled>
      <div className="container">
        <h1>expense control</h1>
        {budget ? (
          <Control
            addExpenseList={addExpenseList}
            expenseList={expenseList}
            budget={budget}
            totalExpense={totalExpense}
          />
        ) : (
          <Budget addBuget={addBuget} />
        )}
      </div>
    </AppStyled>
  );
};

export default App;
