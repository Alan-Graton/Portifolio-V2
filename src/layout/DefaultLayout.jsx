import React from "react";

import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <div>
        <AppHeader
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <main>
          <AppContent
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </main>
        <AppFooter />
      </div>
    </>
  );
}
