import React, { useContext, useEffect } from "react";
import "./main.css";
import Pomodoro from "../Pomodoro/Pomodoro";
import ShortBreak from "../Shortbreak/ShortBreak";
import LongBreak from "../Longbreak/LongBreak";
import { StateContext } from "../../StateProvider";

function Main() {
  const {
    pomodoro,
    shortBreak,
    longBreak,
    setPomodoro,
    setLongBreak,
    setShortBreak,
    toggleTime,
  } = useContext(StateContext);

  useEffect(() => {
    toggleTime();
  }, [pomodoro, shortBreak, longBreak]);

  return (
    <>
      <main id="main">
        <p id="main-text">
          <strong value="Hello there!">Time to focus!!</strong>
        </p>
        <div id="clock">
          <div id="clock-box">
            <div className="clock-box-nav">
              <button
                onClick={() => {
                  setPomodoro(true);
                  setShortBreak(false);
                  setLongBreak(false);
                  // console.log("button1");
                  toggleTime();
                  document.getElementById("main").style.backgroundColor =
                    "#60ae97";
                }}
              >
                Pomodoro
              </button>
              <button
                onClick={() => {
                  alert("Do you really want to switch in short break?");
                  setShortBreak(true);
                  setPomodoro(false);
                  setLongBreak(false);
                  console.log("button2");
                  toggleTime();
                  document.getElementById("main").style.backgroundColor =
                    "#2d3142";
                }}
              >
                Short Break
              </button>
              <button
                onClick={() => {
                  setLongBreak(true);
                  setPomodoro(false);
                  setShortBreak(false);
                  console.log("button3");
                  toggleTime();
                  document.getElementById("main").style.backgroundColor =
                    "#5f5d65";
                }}
              >
                Long Break
              </button>
            </div>
            <div className="timer">
              {pomodoro && <Pomodoro />}
              {shortBreak && <ShortBreak />}
              {longBreak && <LongBreak />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
