import React, { useState, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const ExpenseStyled = styled.form`
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
  input[type="text"] {
    width: 100%;
    line-height: 2rem;
    outline: none;
    border: 1px solid #007bdf;
    margin: 10px 0 10px 0;
  }
  input[type="submit"] {
    width: 6em;
    border: none;
    outline: none;
    background: #007bdf;
    color: #fafdff;
    line-height: 2rem;
    cursor: pointer;
  }
  input[type="submit"]:active {
    transform: scale(0.8);
  }
  .error {
    background: #ff3c32;
    color: #fafdff;
    padding: 10px;
  }
`;

const Expense = ({ addExpenseList }) => {
  // create State
  let [error, setError] = useState(null);
  // create Ref
  let descriptionRef = useRef();
  let amountRef = useRef();

  const add = (e) => {
    e.preventDefault();
    let description = descriptionRef.current.value.trim();
    let amount = amountRef.current.value.trim();

    //validate
    if (description === "") {
      setError("Required description");
      descriptionRef.current.focus();
      return;
    }
    setError("");

    if (amount === "") {
      setError("Required Amount");
      descriptionRef.current.focus();
      return;
    }
    setError("");

    if (isNaN(amount)) {
      amountRef.current.value = "";
      amountRef.current.focus();
      setError("Must be numeric");
      return;
    }
    setError(null);
    addExpenseList({ id: uuidv4(), description, amount: parseFloat(amount) });

    descriptionRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.focus();
  };
  return (
    <ExpenseStyled onSubmit={add}>
      <h2>Add Expense</h2>
      <label htmlFor="description">Description:*</label>
      <input type="text" id="description" ref={descriptionRef} />
      <label htmlFor="amount">Amount:*</label>
      <input type="text" id="amount" ref={amountRef} />
      <input type="submit" value="Send" />
      {error ? <p className="error"> {error} </p> : null}
    </ExpenseStyled>
  );
};
Expense.protoType = {
  addExpenseList: PropTypes.func.isRequired,
};
export default Expense;
