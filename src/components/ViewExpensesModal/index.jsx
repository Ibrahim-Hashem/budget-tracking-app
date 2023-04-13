import React from 'react';
import Modal from '../shared/Modal';
import { BudgetsContext } from '../../context/BudgetsContext';
import { useContext } from 'react';

export default function ViewExpensesModal({ isOpen, onClose, budgetId }) {
  const { getBudgetExpenses, deleteExpense } = useContext(BudgetsContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-2xl font-bold">Expenses</h1>
      <div className="flex flex-col justify-center items-center">
        {getBudgetExpenses(budgetId).map((expense) => {
          return (
            <div key={expense.id} className="flex justify-between w-full border p-4">
              <div>{expense.description}</div>
              <div>{expense.amount}</div>
              <button className="text-red-600" onClick={() => deleteExpense(expense.id)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
