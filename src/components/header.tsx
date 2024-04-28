// Header.tsx
"use client";

import React from "react";

interface HeaderProps {
  onSelectSection: (section: string) => void;
}

const Header: React.FC = ({ onSelectSection }: HeaderProps) => {
  return (
    <header id="header" className="flex flex-col items-center justify-around">
      <nav className="nav-bar flex flex-col justify-between w-24">
        <a
          href="#"
          onClick={() => onSelectSection("home")}
          className="ml-1/100"
        >
          LOGO
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("home")}
          className="ml-1/100"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("about")}
          className="ml-1/100"
        >
          About
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("painting")}
          className="ml-1/100"
        >
          Painting
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("huile")}
          className="ml-1/100"
        >
          Huile
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("sculpture")}
          className="ml-1/100"
        >
          Sculpture
        </a>
        <a
          href="#"
          onClick={() => onSelectSection("contact")}
          className="ml-1/100"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
