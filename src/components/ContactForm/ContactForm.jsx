import React from "react";

import "./ContactForm.scss";

export default function ContactForm() {
  // FIXME: Modal || Form is not responsive
  return (
    <>
      <form className="contact__form">
        <div className="form__content">
          <div className="form__body">
            <input placeholder="Your name" />
            <textarea placeholder="Your message" />
          </div>
        </div>
      </form>
    </>
  );
}
