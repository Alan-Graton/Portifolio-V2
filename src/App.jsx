import React from "react";

import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <div className="container">
        <div className="control_theme_div">
          <button className="control_theme_btn">Light/Dark Mode</button>
        </div>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
