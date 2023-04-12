import { Button, ButtonBlue } from '../Button';
import { useState, useContext } from 'react';
import AddBudgetModal from '../AddBudgetModal';
import AddExpenseModal from '../AddExpenseModal';
import { BudgetsContext } from '../../context/BudgetsContext';

function Navbar() {
  const [addBudgetModal, setAddBudgetModal] = useState(false);
  const [addExpenseModal, setAddExpenseModal] = useState(false);

  const { budgets } = useContext(BudgetsContext);

  return (
    <>
      <div className="flex flex-row justify-around my-4">
        <h1 className="text-xl m-3">Budgeting Tracker</h1>
        <div className="flex w-1/2 justify-end">
          <Button
            btnText="Add Budget"
            onClick={() => {
              setAddBudgetModal(true);
              setAddExpenseModal(false);
            }}
          />
          <ButtonBlue
            btnText="Add Expense"
            onClick={() => {
              if (budgets.length <= 0) {
                alert('Please add a budget first');
              } else {
                setAddExpenseModal(true);
                setAddBudgetModal(false);
              }
            }}
          />
        </div>
      </div>
      {addBudgetModal && (
        <>
          <AddBudgetModal
            onClose={() => {
              setAddBudgetModal(false);
            }}
            isOpen={addBudgetModal}
          />
        </>
      )}
      {addExpenseModal && (
        <AddExpenseModal
          onClose={() => {
            setAddExpenseModal(false);
          }}
          isOpen={addExpenseModal}
        />
      )}
    </>
  );
}

export default Navbar;
