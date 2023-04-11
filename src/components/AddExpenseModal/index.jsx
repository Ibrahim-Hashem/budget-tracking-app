import Modal from '../shared/Modal';

export default function index({ isOpen, onClose }) {
  const handleAddExpense = () => {
    console.log('add expense');
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <button
        className="text-white bg-blue-500 rounded-md mx-2 px-4 hover:shadow-xl mt-4"
        type="submit"
        onClick={handleAddExpense}>
        Add Budget
      </button>
    </Modal>
  );
}
