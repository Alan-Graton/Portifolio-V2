import React from "react";

import LandingPage from "../views/components/LandingPage/LandingPage";
import MyTimeInVG from "../views/components/MyTimeInVG/MyTimeInVG";
import ChallengesPage from "../views/components/ChallengesPage/ChallengesPage";
import ProjectsPage from "../views/components/ProjectsPage/ProjectsPage";
import IdiomsPage from "../views/components/IdiomsPage/IdiomsPage";
import ContactModal from "../views/components/ContactModal/ContactModal";

export default function AppContent({ setModalVisible, modalVisible }) {
  return (
    <>
      {/* Separar cada um em seu própria section? */}
      <section className="app_content__container">
        <LandingPage />
        <MyTimeInVG />
        <ChallengesPage />
        <ProjectsPage />
        <IdiomsPage />
        <ContactModal visible={modalVisible} setVisible={setModalVisible} />
      </section>
    </>
  );
}
