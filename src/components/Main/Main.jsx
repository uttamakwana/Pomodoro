import React, { useContext, useEffect, useRef } from "react";
import "./main.css";
import Pomodoro from "../Pomodoro/Pomodoro";
import ShortBreak from "../Shortbreak/ShortBreak";
import LongBreak from "../Longbreak/LongBreak";
import { StateContext } from "../../StateProvider";
import audio from "../../assets/stop.mp3";

function Main() {
  //! useContext for taking state values that "StateContext" provides to it's children
  const {
    pomodoro,
    shortBreak,
    longBreak,
    setPomodoro,
    setLongBreak,
    setShortBreak,
    toggleTime,
    time,
    clockStop,
    pomodoroTime
  } = useContext(StateContext);

  const audioRef = useRef();

  useEffect(() => {
    if (clockStop && time === pomodoroTime) {
      console.log("its working");
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [time, clockStop, pomodoro, shortBreak, longBreak]);
  //! This useEffect is important as it calls toggleTime() whenever we shifts into diffrenet clocks!
  useEffect(() => {
    toggleTime();
  }, [pomodoro, shortBreak, longBreak]);

  return (
    <>
      <audio src={audio} ref={audioRef}></audio>
      <main id="main">
        <p id="main-text">
          <strong value="Hello there!">Time to focus!!</strong>
        </p>
        <div id="clock">
          <div id="clock-box">
            {/* buttons for shifting clocks */}
            <div className="clock-box-nav">
              <button
                onClick={() => {
                  setPomodoro(true);
                  setShortBreak(false);
                  setLongBreak(false);
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
                  document.getElementById("main").style.backgroundColor =
                    "#B2A4FF";
                }}
              >
                Short Break
              </button>
              <button
                onClick={() => {
                  setLongBreak(true);
                  setPomodoro(false);
                  setShortBreak(false);
                  toggleTime();
                  document.getElementById("main").style.backgroundColor =
                    "#5f5d65";
                }}
              >
                Long Break
              </button>
            </div>
            {/* conditinal div rendering */}
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
