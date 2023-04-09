import React, { useState, useEffect } from 'react';

export default function Modal({ children, isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`${
        isModalOpen
          ? 'block bg-white drop-shadow-xl m-20 border-blue-500 border-solid p-10 rounded-md h-auto'
          : 'hidden'
      } fixed z-10 inset-0 overflow-y-auto`}>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
