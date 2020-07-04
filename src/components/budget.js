import React, { useRef, useState } from "react";
import styled from "styled-components";

const BudgetStyled = styled.form`
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

const Budget = ({ addBuget }) => {
  let [error, setError] = useState(null);

  let amountRef = useRef();

  const addmount = (e) => {
    e.preventDefault();
    let amount = amountRef.current.value.trim();

    //validate
    if (amount === "") {
      setError("Required item");
      return;
    }
    setError(null);

    if (isNaN(amount)) {
      amountRef.current.value = "";
      amountRef.current.focus();
      setError("Must be numeric");
      return;
    }
    setError(null);

    amountRef.current.value = "";
    amountRef.current.focus();
    addBuget(amount);
  };
  return (
    <BudgetStyled onSubmit={(e) => addmount(e)}>
      <h2>Budget</h2>
      <label htmlFor="amount">Total Amount:*</label>
      <input type="text" id="amount" ref={amountRef} />
      <input type="submit" value="Send" />
      {error ? <p className="error"> {error} </p> : null}
    </BudgetStyled>
  );
};

export default Budget;
