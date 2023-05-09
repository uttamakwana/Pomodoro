import React, { createContext, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

export const AppContext = createContext(null);

function Home() {
  const [clock, setClock] = useState(true);
  const [shortBreakDiv, setShortBreakDiv] = useState(false);
  const [longBreakDiv, setLongBreakDiv] = useState(false);
  const [btnText, setBtnText] = useState(true);
  const [pause, setPause] = useState(false);

  return (
    <AppContext.Provider
      value={{
        clock,
        setClock,
        shortBreakDiv,
        setShortBreakDiv,
        longBreakDiv,
        setLongBreakDiv,
        btnText,
        setBtnText,
        pause,
        setPause
      }}
    >
      <main id="home" style={{ height: "100vh" }}>
        {/* Two different components
        1. Header 👉 Where all the navigation lies
        2. Main 👉 Where all the main part of pomodoro lies
        */}
        {/* Header Component - Start */}
        <Header />
        {/* Header Component - End */}

        {/* Main Component - Start */}
        <Main />
        {/* Main Component - End */}
      </main>
    </AppContext.Provider>
  );
}

export default Home;
