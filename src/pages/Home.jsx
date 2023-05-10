import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import StateProvider from "../StateProvider";

function Home() {
  //! Here StateProvider Component will provide state values to all it's children(<Header /> <Main /> and the children of <Main /> etc...!
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
