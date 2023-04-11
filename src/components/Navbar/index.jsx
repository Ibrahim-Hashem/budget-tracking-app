import { Button, ButtonBlue } from '../Button';
import { useState, useContext, useEffect } from 'react';
import AddBudgetModal from '../AddBudgetModal';
import AddExpenseModal from '../AddExpenseModal';
import { BudgetsContext } from '../../context/BudgetsContext';

function Navbar() {
  const [addBudgetModal, setAddBudgetModal] = useState(false);
  const [addExpenseModal, setAddExpenseModal] = useState(false);

  const { budgets } = useContext(BudgetsContext);
  useEffect(() => {
    budgets.length > 0 ? console.log({ budgets }) : console.log('no budgets');
  }, [budgets]);

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
              setAddExpenseModal(true);
              setAddBudgetModal(false);
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
