import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ExpenseListStyled = styled.div`
  background: #fafdff;
  padding: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: auto;
  h2 {
    text-align: center;
    margin: 0;
    color: #007bdf;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  p {
    border-bottom: 1px solid #007bdf;
  }

  .warning {
    border-bottom: 1px solid orange;
  }
  .danger {
    border-bottom: 1px solid red;
  }
`;

const ExpenseList = ({ expenseList, budget, totalExpense }) => {
  return (
    <ExpenseListStyled>
      <h2>Expense List</h2>
      {expenseList.map((expense) => (
        <p className="row" key={expense.id}>
          <span>{expense.description}</span> <span>{expense.amount}</span>
        </p>
      ))}
      <p className="row">
        <span>Total Budget:</span>
        <span>{budget}</span>
      </p>

      {totalExpense > budget * 0.75 ? (
        <p className="row danger">
          <span>Total Expense:</span>
          <span>{totalExpense}</span>
        </p>
      ) : totalExpense > budget * 0.45 ? (
        <p className="row warning">
          <span>Total Expense:</span>
          <span>{totalExpense}</span>
        </p>
      ) : (
        <p className="row">
          <span>Total Expense:</span>
          <span>{totalExpense}</span>
        </p>
      )}
    </ExpenseListStyled>
  );
};

ExpenseList.protoType = {
  expenseList: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
  totalExpense: PropTypes.number.isRequired,
};
export default ExpenseList;
