import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(15 * 60);
  const [time, setTime] = useState(pomodoroTime);
  const [isActive, setIsActive] = useState(false);
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [activeTime, setActiveTime] = useState("");

  let interval;
  useEffect(() => {
    // toggleTime();
  }, [pomodoro, shortBreak, longBreak]);
  useEffect(() => {
    // toggleTime();
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time, isActive, pomodoro, shortBreak, longBreak]);

  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minute < 10 ? `0${minute}` : minute} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const toggleTime = () => {
    if (pomodoro) {
      //   console.log(activeTag);
      console.log(pomodoroTime);
      setTime(pomodoroTime);
    } else if (shortBreak) {
      //   console.log(activeTag);
      setTime(shortBreakTime);
    } else if (longBreak) {
      //   console.log(activeTag);
      setTime(longBreakTime);
    }
  };

  return (
    <StateContext.Provider
      value={{
        time,
        setTime,
        getTime,
        pomodoroTime,
        setPomodoroTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        isActive,
        setIsActive,
        pomodoro,
        setPomodoro,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        toggleTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
