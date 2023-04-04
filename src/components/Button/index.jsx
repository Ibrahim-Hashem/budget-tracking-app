import { useCallback } from 'react';

export function Button({ btnText = 'default', onClick }) {
  const handleClick = useCallback(() => onClick(btnText), [btnText, onClick]);

  return (
    <button
      className="text-blue-500 border-solid border-2 border-blue-500 rounded-md mx-2 px-4  hover:bg-gray-100 hover:shadow-xl"
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}

export function ButtonWhite({ btnText = 'default', onClick }) {
  const handleClick = useCallback(() => onClick(btnText), [btnText, onClick]);

  return (
    <button
      className="text-white bg-blue-500 border-solid border-2 border-white rounded-md mx-2 px-4 hover:shadow-xl"
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
