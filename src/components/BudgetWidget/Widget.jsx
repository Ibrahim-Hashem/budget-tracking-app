export default function Widget({ children, spent, budget }) {
  const className = ['bg-white', 'rounded-md', 'shadow-xl', 'p-4'];
  if (spent >= budget) {
    className.push('bg-red-100');
  }
  return <div className={className.join(' ')}>{children}</div>;
}
