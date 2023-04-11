import { useContext, useState } from 'react';
import { BudgetsContext } from '../../context/BudgetsContext';
import Modal from '../shared/Modal';

export default function AddBudgetModal({ isOpen, onClose }) {
  const { addBudget } = useContext(BudgetsContext);
  const [budget, setBudget] = useState(0);
  const [budgetName, setBudgetName] = useState('');

  const handleAddBudget = () => {
    if (budget === 0 || budgetName === '') {
      alert('Please fill out all fields');
      return;
    }
    addBudget({ name: budgetName, max: budget });
    setBudget(0);
    setBudgetName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <label htmlFor="budgetName">Budget Name</label>
        <input
          className="border-2 border-gray-300 rounded-md"
          type="text"
          id="budgetName"
          value={budgetName}
          required
          onChange={(e) => setBudgetName(e.target.value)}
        />
        <label className="mt-4" htmlFor="budget">
          Budget Amount
        </label>
        <input
          className="border-2 border-gray-300 rounded-md"
          type="number"
          id="budget"
          value={budget}
          required
          onChange={(e) => setBudget(e.target.value)}
        />
        <button
          className="text-white bg-blue-500 rounded-md mx-2 px-4 hover:shadow-xl mt-4"
          type="submit"
          onClick={handleAddBudget}>
          Add Budget
        </button>
      </div>
    </Modal>
  );
}
