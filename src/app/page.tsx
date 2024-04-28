"use client";

import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Painting from "../components/Painting";
import Sculpture from "../components/Sculpture";

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  const renderSection = () => {
    switch (selectedSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "painting":
        return <Painting />;
      case "sculpture":
        return <Sculpture />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Header onSelectSection={setSelectedSection} />
      <div className="content-container">{renderSection()}</div>
      <Footer />
    </div>
  );
};

export default App;
