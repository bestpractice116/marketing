import React from "react";
import Banner from "../banner.png"; // Ensure the image is in the 'public' directory or handled by Vite's asset pipeline

// Define prop types
interface PopupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null; // Only render the popup when isOpen is true

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-5 lg:p-0">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full  relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-full transition"
        >
          ✕
        </button>

        {/* Banner */}
        <div className="flex justify-center">
          <a
            href="https://apply.nulearn.in/e-mba-iim-shillong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Banner} alt="Banner" className="rounded-lg cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
