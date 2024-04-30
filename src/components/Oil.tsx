"use client";

import { filters, oilData } from "@/assets/data/oilData";
import Portfolio from "../components/Portfolio";

const Oil = () => {
  return (
    <>
      <section id="oil">
        <div className="title-section-container">
          <h2 className="text-5xl">MES PEINTURES À L'HUILE</h2>
        </div>
      </section>
      <Portfolio filters={filters} projects={oilData} />
    </>
  );
};

export default Oil;
