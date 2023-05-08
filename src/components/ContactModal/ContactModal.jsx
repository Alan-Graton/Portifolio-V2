import React from "react";

import "./ContactModal.scss";

import ContactForm from "../ContactForm/ContactForm";

export default function ContactModal({ visible, setVisible }) {
  return (
    <div
      className={
        visible
          ? "contact_modal__overlay_visible"
          : "contact_modal__overlay_hidden"
      }
    >
      {/* FIXME: Elements order should be: Modal, Modal Content, Form, Body and Footer */}
      <div className="contact__modal">
        <div className="contact_modal_content">
          <div className="contact_modal__header">
            <div className="contact_modal__header_content">
              <h3>Send me an E-mail!</h3>
              <span
                class="material-symbols-outlined"
                onClick={() => setVisible(false)}
              >
                close
              </span>
            </div>
          </div>
          <div className="contact_modal__body">
            <ContactForm />
          </div>
          <div className="contact_modal__footer">
            <button className="modal_footer_cancel_btn">Never mind</button>
            <button className="modal_footer_send_btn">Send a "Hello"</button>
          </div>
        </div>
      </div>
    </div>
  );
}
