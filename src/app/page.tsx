"use client";

import Oil from "@/components/Oil";
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
      case "huile":
        return <Oil />;
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
      <div className="content-container flex flex-col items-center">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
