import React from "react";
import styled from "styled-components";
import Expense from "./expense";
import ExpenseList from "./expenseList";
const ControlStyled = styled.div`
  .item {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;

    .item {
      width: 45%;
      margin-bottom: none;
    }
  }
`;

const Control = ({ addExpenseList, expenseList, budget, totalExpense }) => {
  return (
    <ControlStyled>
      <div className="item">
        <Expense addExpenseList={addExpenseList} />
      </div>
      <div className="item">
        <ExpenseList
          expenseList={expenseList}
          budget={budget}
          totalExpense={totalExpense}
        />
      </div>
    </ControlStyled>
  );
};

export default Control;
