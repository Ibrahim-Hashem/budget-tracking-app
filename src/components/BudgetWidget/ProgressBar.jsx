import { useEffect, useState } from 'react';

export default function ProgressBar({ spent, budget }) {
  const percentage = (spent / budget) * 100;
  let barWidth = percentage > 100 ? 100 : percentage;

  const className = ['h-2.5', 'rounded-full'];
  const [color, setColor] = useState('bg-blue-500');
  useEffect(() => {
    if (spent >= budget * 0.75 && spent < budget) {
      setColor('bg-red-200');
    }
    if (spent >= budget) {
      setColor('bg-red-500');
    }
    barWidth = percentage > 100 ? 100 : percentage;
  }, [spent, budget]);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={[...className, color].join(' ')} style={{ width: barWidth + '%' }}></div>
    </div>
  );
}
