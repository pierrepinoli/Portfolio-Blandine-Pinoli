"use client";

import Portfolio from "../components/Portfolio";
import { filters, oilData } from "@/assets/data/oilData";

// components/About.tsx
const Oil = () => {
  return (
    <section id="oil">
      <div className="title-section-container">
        <h2 className="text-5xl">PEINTURE À L'HUILE</h2>
        <Portfolio filters={filters} projects={oilData} />
      </div>
    </section>
  );
};

export default Oil;
