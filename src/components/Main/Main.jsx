import React, { useContext, useRef, useState } from "react";
import "./main.css";
import { AppContext } from "../../pages/Home";

function Main() {
  let pauseBtnRef = useRef();
  let startBtnRef = useRef();
  let timeRef = useRef();
  let minuteRef = useRef();
  let secondsRef = useRef();
  let btnRef = useRef();
  let shortBreakBtn = useRef();
  let minuteShortBreakRef = useRef();
  let secondsShortBreakRef = useRef();

  const {
    clock,
    setClock,
    shortBreakDiv,
    setShortBreakDiv,
    longBreakDiv,
    setLongBreakDiv,
    pause,
    setPause,
  } = useContext(AppContext);

  let [stopClock, setStopClock] = useState(false);

  let minute = 25;
  let seconds = 60;
  let countInterval;
  let countIntervalForShortBreak;

  function countDown() {
    console.log("stopclock", stopClock);
    if (stopClock) {
      return clearInterval(countInterval);
    }
    if (minute == 25 && seconds == 60) {
      minute = minute - 1;
      minuteRef.current.innerHTML = minute;
      secondsRef.current.innerHTML = seconds - 1;
    }
    if (minute == 0 && seconds == 0) {
      minute = 25;
      seconds = 60;
      minuteRef.current.innerHTML = 25;
      secondsRef.current.innerHTML = `0${seconds - seconds}`;
      setPause(!pause);
      return clearInterval(countInterval);
    }
    if (seconds > 0) {
      seconds -= 1;
      if (seconds < 10) {
        secondsRef.current.innerHTML = `0${seconds}`;
      } else {
        secondsRef.current.innerHTML = seconds;
      }
    } else {
      minute = minute - 1;
      minuteRef.current.innerHTML = minute;
      seconds = 60;
    }
  }

  function startClock() {
    if (btnRef.current.innerHTML === "Pause") {
      btnRef.current.innerHTML = "Start";
      return clearInterval(countInterval);
    }
    // console.log(pauseBtnRef.current.value);
    // console.log(startBtnRef);
    // console.log(timeRef);
    // console.log(timeRef.current.innerHTML);
    // console.log(startBtnRef.current.innerHTML);
    // console.log("first");
    else {
      btnRef.current.innerHTML = "Pause";
      countInterval = setInterval(countDown, 10);
    }
  }

  function shortBreakCountDown() {
    if (minute === 0 && seconds === 0) {
      minute = 5;
      seconds = 60;
      shortBreakBtn.current.value = "Start";
      minuteShortBreakRef.current.innerHTML = minute;
      secondsShortBreakRef.current.innerHTML = `0${seconds - seconds}`;
      return clearInterval(countIntervalForShortBreak);
    }
    if (minute === 5 && seconds == 60) {
      minute = minute - 1;
      minuteShortBreakRef.current.innerHTML = minute;
      secondsShortBreakRef.current.innerHTML = seconds;
    }
    if (seconds > 0) {
      seconds -= 1;
      if (seconds < 10) {
        secondsShortBreakRef.current.innerHTML = `0${seconds}`;
      } else {
        secondsShortBreakRef.current.innerHTML = seconds;
      }
    } else {
      minute = minute - 1;
      minuteShortBreakRef.current.innerHTML = minute;
      seconds = 60;
    }
  }

  function shortBreak() {
    if (shortBreakBtn.current.innerHTML === "Pause") {
      shortBreakBtn.current.innerHTML = "Start";
      return clearInterval(countIntervalForShortBreak);
    } else {
      shortBreakBtn.current.innerHTML = "Pause";
      minute = 5;
      countIntervalForShortBreak = setInterval(shortBreakCountDown, 1000);
    }
  }

  return (
    <>
      <main id="main">
        <p id="main-text">
          <strong ref={timeRef} value="Hello there!">
            Time to focus!!
          </strong>
        </p>
        <div id="clock">
          <div id="clock-box">
            <div className="clock-box-nav">
              <button
                onClick={() => {
                  setClock(true);
                  setShortBreakDiv(false);
                  setLongBreakDiv(false);
                  document.getElementById("main").style.backgroundColor =
                    "#60ae97";
                }}
              >
                Clock
              </button>
              <button
                onClick={() => {
                  setShortBreakDiv(true);
                  setClock(false);
                  setLongBreakDiv(false);
                  document.getElementById("main").style.backgroundColor =
                    "#bfc0c0";
                }}
              >
                Short Break
              </button>
              <button
                onClick={() => {
                  setLongBreakDiv(true);
                  setClock(false);
                  setShortBreakDiv(false);
                  document.getElementById("main").style.backgroundColor =
                    "#4f5d75";
                }}
              >
                Long Break
              </button>
            </div>
            <div className="timer">
              {clock && (
                <div className="clock">
                  <span id="minute-clock" value="25" ref={minuteRef}>
                    25
                  </span>
                  :
                  <span id="seconds-clock" value="00" ref={secondsRef}>
                    00
                  </span>
                </div>
              )}
              {shortBreakDiv && (
                <div className="short-break">
                  <span
                    id="minute-short-break"
                    value="05"
                    ref={minuteShortBreakRef}
                  >
                    05
                  </span>
                  :
                  <span
                    id="seconds-short-break"
                    value="00"
                    ref={secondsShortBreakRef}
                  >
                    00
                  </span>
                </div>
              )}
              {longBreakDiv && <div className="long-break">15:00</div>}
            </div>
            <div className="submitBtns">
              {/* {pause ? (
                <button
                  id="pauseBtn"
                  value="Pause"
                  onClick={() => {
                    clearInterval(countInterval);
                    setPause(!pause);
                    setStopClock(true);
                  }}
                  ref={pauseBtnRef}
                >
                  Pause
                </button>
              ) : (
                <button
                  id="startBtn"
                  value="Start"
                  ref={startBtnRef}
                  onClick={() => {
                    setStopClock(false);
                    startClock();
                    setPause(!pause);
                  }}
                >
                  Start
                </button>
              )} */}
              {clock && (
                <button
                  ref={btnRef}
                  id="submitBtn"
                  value="Start"
                  onClick={() => {
                    startClock();
                  }}
                >
                  Start
                </button>
              )}
              <button
                ref={shortBreakBtn}
                value="Start"
                onClick={() => {
                  shortBreak();
                  setClock(false);
                  setShortBreakDiv(true);
                  setLongBreakDiv(false);
                  document.getElementById("main").style.backgroundColor =
                    "#bfc0c0";
                }}
              >
                {shortBreakDiv ? "Start" : "Next"}
              </button>
              {/* {stopClock ? <strong>Next</strong> : ""} */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
