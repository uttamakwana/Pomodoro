import { StateContext } from "../../StateProvider";
import "../clock.css";
import { useContext } from "react";

function Pomodoro() {
  // Taking states value of time, getTime, isActive, setActive for displaying time and controlling the button
  const { time,setTime, pomodoroTime, getTime, isActive, setIsActive, clockStop, setClockStop } = useContext(StateContext);
  
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
        {
        time < pomodoroTime ? <button
          onClick={() => {
            setTime(pomodoroTime);
          }}
        >
        Reset
      </button> : ""
        }
        {clockStop && time === pomodoroTime ? <button onClick={() => {
          setClockStop(false);
        }}>Stop Music</button> : ""}
      </div>
    </main>
  );
}

export default Pomodoro;
