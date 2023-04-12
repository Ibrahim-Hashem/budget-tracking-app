import React, { useState, useEffect } from 'react';

export default function Modal({ children, isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="flex  justify-center w-screen">
        <div
          className={`${
            isModalOpen
              ? 'block bg-white drop-shadow-xl m-20 border-blue-500 border-solid p-10 mt-40 rounded-md '
              : 'hidden'
          } fixed z-10 inset-0  h-fit w-auto `}>
          {children}
          <div className="flex w-full justify-center mt-4">
            <button className="text-red-700" onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
