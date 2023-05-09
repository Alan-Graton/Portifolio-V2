import React from "react";

import react_logo from "../../assets/react.svg";
import javascript_logo from "../../assets/javascript.svg";
import css3_logo from "../../assets/css3.svg";
import html5_logo from "../../assets/html-5.svg";
import coreui_logo from "../../assets/coreui.svg";
import nodeJS_logo from "../../assets/node-js.svg";
import awslambda_logo from "../../assets/awslambda.svg";
import typescript_logo from "../../assets/typescript.svg";
import serverless_logo from "../../assets/serverless.svg";
import light_expo_logo from "../../assets/light_expo.svg";
import dark_expo_logo from "../../assets/dark_expo.svg";

import "./ProjectsPage.scss";

export default function ProjectsPage() {
  return (
    <>
      <section className="projects_section">
        <h2>Projects</h2>
        <div className="projects_list">
          <div className="project_card Contab_project">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>2B Contab - Web Portal</h3>
              </div>
              <div className="project_card__body">
                <p>Develop a Web Portal by my self using a template.</p>
              </div>
              <div className="project_card__footer">
                <p>Techs</p>
                <div className="project_techs_group">
                  <img src={react_logo} alt="React Logo" />
                  <img src={html5_logo} alt="HTML5 Logo" />
                  <img src={css3_logo} alt="CSS3 Logo" />
                  <img src={javascript_logo} alt="JavaScript Logo" />
                  <img src={nodeJS_logo} alt="Node-JS Logo" />
                  <img src={awslambda_logo} alt="AWS Lambdas Logo" />
                  <img src={serverless_logo} alt="Serverless Logo" />
                  <img src={coreui_logo} alt="Coreui React Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="project_card FenixPortal_project">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>Fenix Group of Companies - Web Portal</h3>
              </div>
              <div className="project_card__body">
                <p>My first team programming project with a Mid Dev.</p>
              </div>
              <div className="project_card__footer">
                <p>Techs</p>
                <div className="project_techs_group">
                  <img src={react_logo} alt="React Logo" />
                  <img src={html5_logo} alt="HTML5 Logo" />
                  <img src={css3_logo} alt="CSS3 Logo" />
                  <img src={javascript_logo} alt="JavaScript Logo" />
                  <img src={typescript_logo} alt="TypeScript Logo" />
                  <img src={nodeJS_logo} alt="Node-JS Logo" />
                  <img src={awslambda_logo} alt="AWS Lambdas Logo" />
                  <img src={serverless_logo} alt="Serverless Logo" />
                  <img src={coreui_logo} alt="Coreui React Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="project_card FenixApp_project">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>Fenix Group of Companies - Mobile App</h3>
              </div>
              <div className="project_card__body">
                <p>
                  Developed my first Mobile App which is connected to Fenix Web
                  Portal.
                </p>
              </div>
              <div className="project_card__footer">
                <p>Techs</p>
                <div className="project_techs_group">
                  <img src={react_logo} alt="React Logo" />
                  <img src={css3_logo} alt="CSS3 Logo" />
                  <img src={javascript_logo} alt="JavaScript Logo" />
                  <img src={typescript_logo} alt="TypeScript Logo" />
                  <img src={nodeJS_logo} alt="Node-JS Logo" />
                  <img src={awslambda_logo} alt="AWS Lambdas Logo" />
                  <img src={serverless_logo} alt="Serverless Logo" />
                  <img src={light_expo_logo} alt="Expo Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="project_card PrayingTable_project">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>CCB RJM - Web Portal</h3>
              </div>
              <div className="project_card__body">
                <p>Web Portal for personal use.</p>
              </div>
              <div className="project_card__footer">
                <p>Techs</p>
                <div className="project_techs_group">
                  <img src={react_logo} alt="React Logo" />
                  <img src={html5_logo} alt="HTML5 Logo" />
                  <img src={css3_logo} alt="CSS3 Logo" />
                  <img src={javascript_logo} alt="JavaScript Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
