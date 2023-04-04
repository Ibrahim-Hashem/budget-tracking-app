import Widget from './Widget';
import TextBar from './TextBar';
import ProgressBar from './ProgressBar.jsx';
import { Button, ButtonBlue } from '../Button';

function BudgetWidget() {
  return (
    <Widget>
      <TextBar name={'placeholder'} spent={100} budget={1000} />
      <ProgressBar spent={100} budget={1000} />
      <div className="pt-2 flex justify-end">
        <Button btnText={'View Expense'} onClick={() => console.log('clicked')} />
        <ButtonBlue btnText={'Add Expense'} onClick={() => console.log('clicked')} />
      </div>
    </Widget>
  );
}
export default BudgetWidget;
