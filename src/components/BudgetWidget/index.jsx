import Widget from './Widget';
import TextBar from './TextBar';
import ProgressBar from './ProgressBar.jsx';

import { Button } from '../Button';
import { BudgetsContext } from '../../context/BudgetsContext';
import { useContext } from 'react';

function BudgetWidget({ budget, spent }) {
  const { deleteBudget } = useContext(BudgetsContext);

  const handleDeleteBudget = () => {
    deleteBudget(budget.id);
  };
  return (
    <>
      <Widget>
        <TextBar name={budget.name} spent={spent} budget={budget.max} />
        <ProgressBar spent={spent} budget={budget.max} />
        <div className="pt-2 flex justify-end">
          <Button btnText={'View Expense'} onClick={() => console.log('clicked')} />
          <button className="text-red-700" onClick={handleDeleteBudget}>
            X
          </button>
        </div>
      </Widget>
    </>
  );
}
export default BudgetWidget;
