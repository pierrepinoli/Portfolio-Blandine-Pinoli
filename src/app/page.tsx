"use client";

import Acrylic from "@/components/Acrylic";
import Oil from "@/components/Oil";
import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Sculpture from "../components/Sculpture";
import Watercolor from "../components/Watercolor";

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  const renderSection = () => {
    switch (selectedSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "oil":
        return <Oil />;
      case "acrylic":
        return <Acrylic />;
      case "watercolor":
        return <Watercolor />;
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
      <main>
        <div className="content-container flex flex-col items-center gap-10 ">
          {renderSection()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
