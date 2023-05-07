import React from "react";

import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage";
import IdiomsPage from "./components/IdiomsPage/IdiomsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import MyTimeInVG from "./components/MyTimeInVG/MyTimeInVG";
import ContactModal from "./components/ContactModal/ContactModal";

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [theme, setTheme] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="control_theme_div">
          <button
            className="control_theme_btn"
            onClick={() => {
              setModalVisible(!modalVisible);
            }}
          >
            "Just call me maybe"
          </button>
          <button className="control_theme_btn">Light/Dark Mode</button>
        </div>
        <LandingPage />
        <MyTimeInVG />
        <ProjectsPage />
        <IdiomsPage />
        <ContactModal visible={modalVisible} setVisible={setModalVisible} />
      </div>
    </>
  );
}

export default App;
