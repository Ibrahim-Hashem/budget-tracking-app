import { createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

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

  const [budgets, setBudgets] = useLocalStorage('budgets', []);
  const [expenses, setExpenses] = useLocalStorage('expenses', []);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense({ description, budgetId, amount }) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidv4(), description, budgetId, amount }];
    });
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        const modBudget = prevBudgets.map((budget) => {
          if (budget.name === name) {
            budget.max = max;
          }
          return budget;
        });
        return [...modBudget];
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  }

  function deleteBudget({ id }) {
    setBudgets((prevBudgets) => prevBudgets.filter((budget) => budget.id !== id));
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
