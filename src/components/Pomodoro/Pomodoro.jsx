import { StateContext } from "../../StateProvider";
import "../clock.css";
import { useContext } from "react";

function Pomodoro() {
  const { time, getTime, isActive, setIsActive } = useContext(StateContext);

  return (
    <main className="clock">
      <strong>{getTime(time)}</strong>
      <div className="pomodoro-btns">
        <button
          className="pomodoro-btn"
          value="Start"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </main>
  );
}

export default Pomodoro;
