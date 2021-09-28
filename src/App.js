import React from "react";
import "./app.scss";

import ClockHeader from "./header/ClockHeader";
import ClockSection from "./clock-section/ClockSection";
import DocumentPage from "./document-page/DocumentPage";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div>
      <ClockHeader />
      <ClockSection />
      <DocumentPage />
      <Footer />
    </div>
  );
};

export default App;
