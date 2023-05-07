import React from "react";

import "./ContactModal.scss";

export default function ContactModal() {
  return (
    <div className="contact_modal__overlay">
      <div className="contact__modal">
        <div className="contact_modal_content">
          <div className="contact_modal__header"></div>
          <div className="contact_modal__body"></div>
          <div className="contact_modal__footer"></div>
        </div>
      </div>
    </div>
  );
}
