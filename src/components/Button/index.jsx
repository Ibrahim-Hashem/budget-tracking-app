import { useCallback } from 'react';

export function Button({ btnText = 'default', onClick }) {
  const handleClick = useCallback(() => onClick(btnText), [btnText, onClick]);

  return (
    <button
      className="text-blue-500 border-solid border border-blue-500 rounded-md mx-2 px-4  hover:bg-gray-100 hover:shadow-xl"
      onClick={handleClick}>
      {btnText}
    </button>
  );
}

export function ButtonBlue({ btnText = 'default', onClick }) {
  const handleClick = useCallback(() => onClick(btnText), [btnText, onClick]);

  return (
    <button
      className="text-white bg-blue-500 rounded-md mx-2 px-4 hover:shadow-xl"
      onClick={handleClick}>
      {btnText}
    </button>
  );
}
