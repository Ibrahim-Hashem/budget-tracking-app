export default function ProgressBar({ spent, budget }) {
  const percentage = (spent / budget) * 100;
  const className = ['bg-blue-500', 'h-2.5', 'rounded-full'];
  if (spent >= budget) {
    className.push('bg-red-500');
  }
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={className.join(' ')} style={{ width: percentage + '%' }}></div>
    </div>
  );
}
