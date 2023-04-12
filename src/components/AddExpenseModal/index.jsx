import Modal from '../shared/Modal';
import { useContext, useState } from 'react';
import { BudgetsContext } from '../../context/BudgetsContext';

export default function index({ isOpen, onClose }) {
  const { addExpense, budgets } = useContext(BudgetsContext);
  const [expense, setExpense] = useState({
    description: '',
    budgetId: '',
    amount: 0
  });
  const handleAddExpense = () => {
    if (expense.description === '' || expense.budgetId === '' || expense.amount <= 0) {
      alert('Please fill out all fields');
      return;
    }
    addExpense(expense);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <label htmlFor="expenseName">Expense Name</label>
        <input
          className="border-2 border-gray-300 rounded-md"
          type="text"
          id="expenseName"
          onChange={(e) => {
            setExpense({ ...expense, description: e.target.value });
          }}
          required
        />
        <label className="mt-4" htmlFor="expenseAmount">
          Expense Amount
        </label>
        <input
          className="border-2 border-gray-300 rounded-md"
          type="number"
          id="expenseAmount"
          onChange={(e) => {
            setExpense({ ...expense, amount: e.target.value });
          }}
          required
        />
        <label className="mt-4" htmlFor="budgetName">
          Associated Budget
        </label>
        <select
          className="border-2 border-gray-300 rounded-md"
          id="budgetName"
          onChange={(e) => {
            setExpense({ ...expense, budgetId: e.target.value });
          }}
          required
          defaultValue={''}>
          <option value="" disabled>
            Select
          </option>
          {budgets.map((budget) => {
            return (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            );
          })}
        </select>
        <button
          className="text-white bg-blue-500 rounded-md mx-2 px-4 hover:shadow-xl mt-4"
          type="submit"
          onClick={handleAddExpense}>
          Add Budget
        </button>
      </div>
    </Modal>
  );
}
