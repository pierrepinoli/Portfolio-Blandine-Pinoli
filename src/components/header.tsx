// Header.tsx
"use client";

import React from "react";

interface HeaderProps {
  onSelectSection: (section: string) => void;
}

const Header: React.FC = ({ onSelectSection }: HeaderProps) => {
  return (
    <header
      id="header"
      className="flex flex-col items-center pt-50 pb-50 fixed top-0 left-0 w-300px h-full overflow-hidden z-50"
    >
      <nav className="nav-bar flex flex-col justify-between pl-10 w-24">
        <a
          href="#"
          onClick={() => onSelectSection("logo")}
          className="ml-1/100"
        >
          LOGO
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("home")}
          className="ml-1/100 text-2xl"
        >
          Accueil
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("about")}
          className="ml-1/100 text-2xl"
        >
          À Propos
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("watercolor")}
          className="ml-1/100 text-2xl"
        >
          Aquarelle
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("acrylic")}
          className="ml-1/100 text-2xl"
        >
          Acrylique
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("oil")}
          className="ml-1/100 text-2xl"
        >
          Peinture à l'huile
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("sculpture")}
          className="ml-1/100 text-2xl"
        >
          Sculpture
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("contact")}
          className="ml-1/100 text-2xl"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
