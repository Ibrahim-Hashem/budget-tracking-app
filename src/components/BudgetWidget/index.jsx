import Widget from './Widget';
import TextBar from './TextBar';
import ProgressBar from './ProgressBar.jsx';

function BudgetWidget() {
  return (
    <Widget>
      <TextBar name={'placeholder'} spent={100} budget={1000} />
      <ProgressBar spent={100} budget={1000} />
    </Widget>
  );
}
export default BudgetWidget;
