import { Button, ButtonWhite } from '../Button';
function Navbar() {
  return (
    <div className="flex flex-row justify-around my-4">
      <h1 className="text-xl m-3">Budgeting Tracker</h1>
      <div className="flex w-1/2 justify-end">
        <Button btnText="Add Budget" />
        <ButtonWhite btnText="Add Expense" />
      </div>
    </div>
  );
}

export default Navbar;
