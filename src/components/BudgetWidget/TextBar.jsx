import formatCurrency from '../../utils/formatCurrency';

export default function TextBar({ name, spent, budget }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl">{name}</h1>
      <p>
        <span className="text-lg ${}">{formatCurrency(spent)}</span> /{' '}
        <span className="text-sm">{formatCurrency(budget)}</span>
      </p>
    </div>
  );
}
