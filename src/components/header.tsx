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
      className="header-container flex flex-col pt-50 pb-50 fixed top-0 left-0 w-300px h-full overflow-hidden z-50"
    >
      <nav className="nav-bar gap-10 flex flex-col justify-between pl-10 w-24">
        <a
          href="#"
          onClick={() => handleSelectSection("home")}
          className="ml-1/100 text-4xl uppercase primary-color"
        >
          LOGO
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("home")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "home"
          )}`}
        >
          Accueil
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("about")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "about"
          )}`}
        >
          À Propos
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("watercolor")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "watercolor"
          )}`}
        >
          Aquarelle
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("acrylic")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "acrylic"
          )}`}
        >
          Acrylique
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("oil")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "oil"
          )}`}
        >
          Peinture à l'huile
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("sculpture")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "sculpture"
          )}`}
        >
          Sculpture
        </a>
        <a
          href="#"
          onClick={() => handleSelectSection("contact")}
          className={`ml-1/100 text-4xl uppercase primary-color ${sectionClassName(
            "contact"
          )}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
