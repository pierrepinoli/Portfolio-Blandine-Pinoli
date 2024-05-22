// Header.tsx
"use client";

import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      id="header"
      className="header-container flex flex-col space-between pt-50 pb-50 fixed top-0 left-0 h-full overflow-hidden z-50"
      style={{ width: "20%" }}
    >
      <nav className="nav-bar-container gap-10 flex flex-col pl-10 w-24 gap-20">
        <div className="nav-bar-home-links flex flex-col gap-5">
          <Link
            to="/"
            className="ml-1/100 text-5xl uppercase primary-color whitespace-nowrap"
          >
            Pinoli Blandine
          </Link>
          <Link
            to="/"
            className="ml-1/100 text-4xl whitespace-nowrap primary-color"
          >
            Accueil
          </Link>
        </div>
        <div className="nav-bar-links flex flex-col gap-20">
          <div className="nav-bar-projects-links flex flex-col gap-5">
            <Link
              to="/watercolor"
              className="ml-1/100 text-4xl whitespace-nowrap primary-color"
            >
              Aquarelle
            </Link>
            <Link
              to="/acrylic"
              className="ml-1/100 text-4xl whitespace-nowrap primary-color"
            >
              Acrylique
            </Link>
            <Link
              to="/oil"
              className="ml-1/100 text-4xl whitespace-nowrap primary-color"
            >
              Peinture à l'huile
            </Link>
            <Link
              to="/sculpture"
              className="ml-1/100 text-4xl whitespace-nowrap primary-color"
            >
              Sculpture
            </Link>
          </div>

          <div className="nav-bar-info-links flex flex-col justify-between gap-5">
            <Link
              to="/about"
              className="ml-1/100 text-4xl whitespace-nowrap primary-color"
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="ml-1/100 text-4xl whitespace-nowrap primary-color"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
