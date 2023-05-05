import React from "react";

import "./App.css";

import react_logo from "./assets/react.svg";
import javascript_logo from "./assets/javascript.svg";
import typescript_logo from "./assets/typescript.svg";
import nodeJS_logo from "./assets/node-js.svg";
import css3_logo from "./assets/css3.svg";
import html5_logo from "./assets/html-5.svg";
import awslambda_logo from "./assets/awslambda.svg";
import serverless_logo from "./assets/serverless.svg";
import light_expo_logo from "./assets/light_expo.svg";
import dark_expo_logo from "./assets/dark_expo.svg";
import profile from "./assets/AlanGraton.jpg";

function App() {
  const [cardHover, setCardHover] = React.useState(false);

  return (
    <>
      <div className="container">
        <aside
          className="presentation_card"
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => setCardHover(false)}
        >
          <div className="card_profile">
            <a href="https://github.com/Alan-Graton" target="_blank">
              <img src={profile} className="profile" alt="Vite logo" />
            </a>
            <h1>Alan Graton</h1>
          </div>
          <div className="badge_card">
            <img src={react_logo} alt="React Logo" loading="lazy" />
            <img src={javascript_logo} alt="JS Logo" loading="lazy" />
            <img src={typescript_logo} alt="TS Logo" loading="lazy" />
            <img src={nodeJS_logo} alt="Node-JS Logo" loading="lazy" />
            <img src={css3_logo} alt="CSS3 Logo" loading="lazy" />
            <img src={html5_logo} alt="HTML5 Logo" loading="lazy" />
            <img src={awslambda_logo} alt="AWS Lambdas Logo" loading="lazy" />
            <img src={serverless_logo} alt="Serverless Logo" loading="lazy" />
            <img
              src={!cardHover ? light_expo_logo : dark_expo_logo}
              alt="Expo Logo"
              loading="lazy"
            />
          </div>
        </aside>
        <aside className="presentation_text">
          <p className="quick_presentation_text">
            Hi hi hi. My name is Alan, I'm 20 years old and live in SP, Brazil.
            <br />
            I'm currently working at <strong>Valiant Group do Brasil</strong> as
            a Junior Full-Stack Dev
          </p>
          <p className="keep_scrolling_text">Keep scrolling for more!</p>
        </aside>
      </div>
    </>
  );
}

export default App;
