import { useContext } from 'react';
import { BudgetsContext } from '../../context/BudgetsContext';
import WidgetWrapper from '../WidgetWrapper';
import BudgetWidget from '../BudgetWidget';

export default function MainContainer() {
  const { budgets, getBudgetExpenses } = useContext(BudgetsContext);

  return (
    <>
      <WidgetWrapper>
        {budgets.map((budget) => {
          const expenses = getBudgetExpenses(budget.id);
          const sum = expenses.reduce((acc, expense) => +acc + +expense.amount, 0);
          return <BudgetWidget key={budget.id} budget={budget} spent={sum} />;
        })}
      </WidgetWrapper>
    </>
  );
}
