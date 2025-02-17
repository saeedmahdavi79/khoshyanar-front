"use client";
import React from "react";

function Modal({ isOpen, onClose, onSubmit, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center z-20"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-5"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          ثبت
        </button>
      </div>
    </div>
  );
}

export default Modal;
