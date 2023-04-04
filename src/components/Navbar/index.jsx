import { Button, ButtonBlue } from '../Button';
import addBudgetFunc from '../../utils/addBudgetFunc';
import addExpenseFunc from '../../utils/addExpenseFunc';

function Navbar() {
  return (
    <div className="flex flex-row justify-around my-4">
      <h1 className="text-xl m-3">Budgeting Tracker</h1>
      <div className="flex w-1/2 justify-end">
        <Button btnText="Add Budget" onClick={addBudgetFunc} />
        <ButtonBlue btnText="Add Expense" onClick={addExpenseFunc} />
      </div>
    </div>
  );
}

export default Navbar;
