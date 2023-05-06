import React from "react";

import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage";
import IdiomsPage from "./components/IdiomsPage/IdiomsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import MyTimeInVG from "./components/MyTimeInVG/MyTimeInVG";

function App() {
  return (
    <>
      <div className="container">
        <div className="control_theme_div">
          <button className="control_theme_btn">Light/Dark Mode</button>
        </div>
        <LandingPage />
        <MyTimeInVG />
        <IdiomsPage />
        <ProjectsPage />
      </div>
    </>
  );
}

export default App;
