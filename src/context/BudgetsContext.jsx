import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getLocalStorage from '../hooks/getLocalStorage';
import setLocalStorage from '../hooks/setLocalStorage';

export const BudgetsContext = createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  // =================== budget
  // {
  //   id,
  //   name,
  //   max,
  // }
  // =================== expense
  //
  // {
  //   id,
  //   budgetId,
  //   description,
  //   amount,
  // }

  const [budgets, setBudgets] = useState(() => {
    const budgetsData = getLocalStorage('budgets');
    return budgetsData;
  });
  const [expenses, setExpenses] = useState(() => {
    const budgetsData = getLocalStorage('expenses');
    return budgetsData;
  });

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
    setLocalStorage('expenses', expenses);
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      console.log({ prevBudgets });
      if (prevBudgets) {
        if (prevBudgets.find((budget) => budget.name === name)) {
          const budgets = [
            ...prevBudgets,
            {
              id: uuidv4(),
              name,
              max
            }
          ];
          setLocalStorage('budgets', budgets);

          return budgets;
        }
      } else {
        const budgets = [
          {
            id: uuidv4(),
            name,
            max
          }
        ];
        setLocalStorage('budgets', budgets);
        return budgets;
      }
    });
  }

  function deleteBudget({ budgetId }) {
    setBudgets((prevBudgets) => prevBudgets.filter((budget) => budget.id !== budgetId));
  }
  function deleteExpense({ id }) {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  }

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
