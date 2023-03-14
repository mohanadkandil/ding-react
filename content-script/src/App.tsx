/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";
import "./App.css";
import { useState } from "react";
import useRecorder from "./hooks/use-recorder";
import { UseRecorder } from "./types/recorder";
import RecorderControls from "./components/RecorderControls";

function App() {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const handleCircleClick = () => {
    setIsDivOpen(!isDivOpen);
  };
  const { recorderState, ...handlers }: UseRecorder = useRecorder();
  const { audio } = recorderState;
  return (
    <div className="relative">
      <div
        className="bg-[#38CCB2] rounded-full fixed bottom-4 right-4 cursor-pointer z-50 w-10 h-10"
        onClick={handleCircleClick}
      >
        <p className="text-white text-xl">+</p>
      </div>
      {isDivOpen && (
        <div className="fixed bottom-16 right-4 w-48 bg-[#302A38] shadow-md rounded-lg py-2 z-50">
          <div className="flex justify-between items-center mb-2">
            <p className="px-4 py-2 text-gray-800 text-sm font-semibold">
              test
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
          <RecorderControls recorderState={recorderState} handlers={handlers} />
        </div>
      )}
    </div>
  );
}

export default App;
