import React from "react";

import "./ProjectsPage.scss";

export default function ProjectsPage() {
  return (
    <>
      {/* TODO: Add a img as background on these cards */}
      {/* TODO: Title: Project, Body: Description, Footer: Techs */}
      <section className="projects_section">
        <h2>Projects</h2>
        <div className="projects_list">
          <div className="project_card">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>2B Contab - Web Portal</h3>
              </div>
              <div className="project_card__body">
                <p>I'm the body</p>
              </div>
              <div className="project_card__footer">
                <p>I'm the Footer</p>
              </div>
            </div>
          </div>
          <div className="project_card">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>Fenix Group of Companies - Web Portal</h3>
              </div>
              <div className="project_card__body">
                <p>I'm the body</p>
              </div>
              <div className="project_card__footer">
                <p>I'm the Footer</p>
              </div>
            </div>
          </div>
          <div className="project_card">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>Fenix Group of Companies - Mobile App</h3>
              </div>
              <div className="project_card__body">
                <p>I'm the body</p>
              </div>
              <div className="project_card__footer">
                <p>I'm the Footer</p>
              </div>
            </div>
          </div>
          <div className="project_card">
            <div className="project_card__content">
              <div className="project_card__header">
                <h3>CCB RJM - Web Portal</h3>
              </div>
              <div className="project_card__body">
                <p>I'm the body</p>
              </div>
              <div className="project_card__footer">
                <p>I'm the Footer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
