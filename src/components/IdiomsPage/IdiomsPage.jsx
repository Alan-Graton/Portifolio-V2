import React from "react";

import portuguese from "../../assets/portuguese.svg";
import english from "../../assets/english.svg";
import spanish from "../../assets/spanish.svg";
import german from "../../assets/german.svg";

import "./IdiomsPage.scss";

export default function IdiomsPage() {
  return (
    <>
      <section className="idioms_section">
        <h2>Idioms</h2>
        <div className="idioms_cards">
          <div className="idiom_card">
            <div className="idiom_card__header">
              <h3>Portuguese (BR)</h3>
            </div>
            <div className="idiom_card__body">
              <div>
                <img src={portuguese} alt="Brazilian Portuguese" />
              </div>
              <p>...</p>
            </div>
            <div className="idiom_card__footer">
              <p>Native Speaker</p>
            </div>
          </div>
          <div className="idiom_card">
            <div className="idiom_card__header">
              <h3>English</h3>
            </div>
            <div className="idiom_card__body">
              <div>
                <img src={english} alt="English" />
              </div>
              <p>Studied in CNA for 8 years or so</p>
            </div>
            <div className="idiom_card__footer">
              <p>Fluent</p>
            </div>
          </div>
          <div className="idiom_card">
            <div className="idiom_card__header">
              <h3>Spanish</h3>
            </div>
            <div className="idiom_card__body">
              <div>
                <img src={spanish} alt="Spanish" />
              </div>
              <p>Studied in CNA for 2 years</p>
            </div>
            <div className="idiom_card__footer">
              <p>Advanced</p>
            </div>
          </div>
          <div className="idiom_card">
            <div className="idiom_card__header">
              <h3>German</h3>
            </div>
            <div className="idiom_card__body">
              <div>
                <img src={german} alt="German" />
              </div>
              <p>Currently studying in Goethe Institut</p>
            </div>
            <div className="idiom_card__footer">
              <p>Basic/Intermediate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
