export default function ProgressBar({ spent, budget }) {
  const percentage = (spent / budget) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: percentage + '%' }}></div>
    </div>
  );
}
