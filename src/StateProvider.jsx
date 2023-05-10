import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  // time for pomodoro clock
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  // time for shorbreak clock
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  // time for break clock
  const [longBreakTime, setLongBreakTime] = useState(15 * 60);
  // the actual clock in which time is showing
  const [time, setTime] = useState(pomodoroTime);
  // is clock start or pause now
  const [isActive, setIsActive] = useState(false);
  // pomodoro clock is active
  const [pomodoro, setPomodoro] = useState(true);
  // shortbreak clock is active
  const [shortBreak, setShortBreak] = useState(false);
  // longbreak clock is active
  const [longBreak, setLongBreak] = useState(false);

  // interval for clock time
  let interval;
  //* used "useEffect" -> because everytime time state changes useEffect calls everytime so that time of clock decreses everytime
  useEffect(() => {
    // toggleTime();
    // if only start button is click and time is greater than 0
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    // whether pause is clicked or time becomes negative
    return () => clearInterval(interval);
  }, [time, isActive, pomodoro, shortBreak, longBreak]);

  //* This function will return the time in "minute : seconds" format
  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minute < 10 ? `0${minute}` : minute} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  //* This function will toggle the time for diffrent clocks
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

  //* Here I have defined all the values of states that statcontext will provide to its children!
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
