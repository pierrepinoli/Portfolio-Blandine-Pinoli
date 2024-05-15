// Header.tsx
"use client";

import React, { useState } from "react";

interface HeaderProps {
  onSelectSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectSection }) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSelectSection = (section: string) => {
    onSelectSection(section);
    setCurrentSection(section);
  };

  const sectionClassName = (section: string) =>
    currentSection === section ? "current-section" : "";

  return (
    <header
      id="header"
      className="header-container flex flex-col  space-between pt-50 pb-50 fixed top-0 left-0 h-full overflow-hidden z-50"
      style={{ width: "20%" }}
    >
      <nav className="nav-bar-container gap-10 flex flex-col pl-10 w-24 gap-20">
        <div className="nav-bar-home-links flex flex-col gap-5">
          <a
            href="#"
            onClick={() => handleSelectSection("home")}
            className="ml-1/100 text-5xl uppercase primary-color whitespace-nowrap"
          >
            Pinoli Blandine
          </a>
          <a
            href="#"
            onClick={() => handleSelectSection("home")}
            className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
              "home"
            )}`}
          >
            Accueil
          </a>
        </div>
        <div className="nav-bar-links flex flex-col gap-20">
          <div className="nav-bar-projects-links flex flex-col gap-5">
            <a
              href="#"
              onClick={() => handleSelectSection("watercolor")}
              className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
                "watercolor"
              )}`}
            >
              Aquarelle
            </a>
            <a
              href="#"
              onClick={() => handleSelectSection("acrylic")}
              className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
                "acrylic"
              )}`}
            >
              Acrylique
            </a>
            <a
              href="#"
              onClick={() => handleSelectSection("oil")}
              className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
                "oil"
              )}`}
            >
              Peinture à l'huile
            </a>
            <a
              href="#"
              onClick={() => handleSelectSection("sculpture")}
              className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
                "sculpture"
              )}`}
            >
              Sculpture
            </a>
          </div>

          <div className="nav-bar-info-links flex flex-col justify-between gap-5">
            <a
              href="#"
              onClick={() => handleSelectSection("about")}
              className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
                "about"
              )}`}
            >
              À Propos
            </a>
            <a
              href="#"
              onClick={() => handleSelectSection("contact")}
              className={`ml-1/100 text-4xl whitespace-nowrap primary-color ${sectionClassName(
                "contact"
              )}`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
