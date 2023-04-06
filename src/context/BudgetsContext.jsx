import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BudgetsContext = createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  // {
  //   id,
  //   name,
  //   max,
  // }

  // {
  //   id,
  //   budgetId,
  //   description,
  //   amount,
  // }

  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense({ description, budgetId, amount }) {
    setExpenses((prevExpenses) => {
      if (prevExpenses.find((expense) => expense.description === description)) {
        return prevExpenses.map((expense) => {
          if (expense.description === description) {
            return {
              ...expense,
              amount: expense.amount + amount
            };
          }
          return expense;
        });
      }
      return [
        ...prevExpenses,
        {
          id: uuidv4(),
          budgetId,
          description,
          amount
        }
      ];
    });
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [
        ...prevBudgets,
        {
          id: uuidv4(),
          name,
          max
        }
      ];
    });
  }
  function deleteBudget() {}
  function deleteExpense() {}

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        setBudgets,
        expenses,
        setExpenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
      }}>
      {children}
    </BudgetsContext.Provider>
  );
};
