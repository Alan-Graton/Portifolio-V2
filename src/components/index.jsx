import React from "react";

// components
import LandingPage from "../views/components/LandingPage/LandingPage";
import MyTimeInVG from "../views/components/MyTimeInVG/MyTimeInVG";
import ChallengesPage from "../views/components/ChallengesPage/ChallengesPage";
import ProjectsPage from "../views/components/ProjectsPage/ProjectsPage";
import IdiomsPage from "../views/components/IdiomsPage/IdiomsPage";
import ContactModal from "../views/components/ContactModal/ContactModal";

export default function PortifolioContent() {
  return (
    <>
      <LandingPage />
      <MyTimeInVG />
      <ChallengesPage />
      <ProjectsPage />
      <IdiomsPage />
      <ContactModal visible={modalVisible} setVisible={setModalVisible} />
    </>
  );
}
