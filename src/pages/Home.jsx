import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import StateProvider from "../StateProvider";

function Home() {
  return (
    <StateProvider>
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
    </StateProvider>
  );
}

export default Home;
