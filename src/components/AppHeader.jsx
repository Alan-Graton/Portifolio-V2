import React from "react";

import "./styles.scss";

export default function AppHeader({ setModalVisible, modalVisible }) {
  return (
    <>
      <header>
        <div className="app_header__actions_btn">
          <button
            onClick={() => {
              setModalVisible(!modalVisible);
            }}
          >
            Just call me maybe
          </button>
          <button>Light/Dark Mode</button>
        </div>
      </header>
    </>
  );
}
