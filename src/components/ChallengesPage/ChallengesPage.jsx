import React from "react";

import vg_light_logo from "../../assets/VG_light_logo.png";
import vg_dark_logo from "../../assets/VG_dark_logo.png";

import "./ChallengesPage.scss";

export default function ChallengesPage() {
  return (
    <>
      <section className="challenges__section">
        <h2>Challenges</h2>
        <aside>
            <img src={vg_dark_logo} alt="Valiant Group logo" />
        <p>Valiant Group is a Tech Startup in SP, Brazil</p>
        </aside>
      </section>
    </>
  );
}
