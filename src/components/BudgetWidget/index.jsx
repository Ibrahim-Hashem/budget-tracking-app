import Widget from './Widget';
import TextBar from './TextBar';
import ProgressBar from './ProgressBar.jsx';

import { Button } from '../Button';
import ViewExpensesModal from '../ViewExpensesModal';
import { BudgetsContext } from '../../context/BudgetsContext';
import { useContext, useState } from 'react';

function BudgetWidget({ budget, spent }) {
  const { deleteBudget } = useContext(BudgetsContext);
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteBudget = () => {
    deleteBudget(budget.id);
  };
  return (
    <>
      <Widget>
        <TextBar name={budget.name} spent={spent} budget={budget.max} />
        <ProgressBar spent={spent} budget={budget.max} />
        <div className="pt-2 flex justify-end">
          <Button btnText={'View Expense'} onClick={() => setOpenModal(true)} />
          <button className="text-red-700" onClick={handleDeleteBudget}>
            X
          </button>
        </div>
      </Widget>
      {openModal && (
        <ViewExpensesModal
          isOpen={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          budgetId={budget.id}
        />
      )}
    </>
  );
}
export default BudgetWidget;
