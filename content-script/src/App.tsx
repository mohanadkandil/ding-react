/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";
import "./App.css";
import { useState } from "react";

function App() {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const handleCircleClick = () => {
    setIsDivOpen(!isDivOpen);
  };

  return (
    <div className="relative">
      <div
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center cursor-pointer z-50"
        onClick={handleCircleClick}
      >
        <p className="text-white text-xl">+</p>
      </div>
      {isDivOpen && (
        <div className="fixed bottom-16 right-4 w-48 bg-white border border-gray-400 shadow-md rounded-lg py-2 z-50">
          <div className="flex justify-between items-center mb-2">
            <p className="px-4 py-2 text-gray-800 text-sm font-semibold">
              Title
            </p>
            <button
              className="text-gray-400 hover:text-gray-800 focus:outline-none"
              onClick={handleCircleClick}
            >
              X
            </button>
          </div>
          <p className="px-4 py-2 text-gray-800 text-sm">
            Some content goes here
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
