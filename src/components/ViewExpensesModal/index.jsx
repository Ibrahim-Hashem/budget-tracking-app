import React from 'react';
import Modal from '../shared/Modal';
import { BudgetsContext } from '../../context/BudgetsContext';
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';

export default function ViewExpensesModal({ isOpen, onClose, budgetId }) {
  const { getBudgetExpenses, deleteExpense } = useContext(BudgetsContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-2xl font-bold">Expenses</h1>
      <div className="flex flex-col justify-center items-center">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {getBudgetExpenses(budgetId).map((expense) => {
              return (
                <tr key={expense.id} className="border-b">
                  <td>{expense.description}</td>
                  <td>{formatCurrency(expense.amount)}</td>
                  <td className="text-center">
                    {' '}
                    <button className="text-red-600" onClick={() => deleteExpense(expense.id)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
