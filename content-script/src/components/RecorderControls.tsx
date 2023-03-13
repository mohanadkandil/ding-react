import { RecorderControlsProps } from "../types/recorder";

export default function RecorderControls({
  recorderState,
  handlers,
}: RecorderControlsProps) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className="controls-container">
      <div className="recorder-display">
        <div className="recording-time">
          {initRecording && <div className="recording-indicator"></div>}
          <span>01</span>
          <span>:</span>
          <span>22</span>
        </div>
        {initRecording && (
          <div className="cancel-button-container">
            <button
              className="cancel-button"
              title="Cancel recording"
              onClick={cancelRecording}
            >
              timer
            </button>
          </div>
        )}
      </div>
      <div className="start-button-container">
        {initRecording ? (
          <button
            className="start-button"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            save
          </button>
        ) : (
          <button
            className="start-button"
            title="Start recording"
            onClick={startRecording}
          >
            start
          </button>
        )}
      </div>
    </div>
  );
}
