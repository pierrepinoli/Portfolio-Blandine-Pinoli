"use client";

import { filters, watercolorData } from "@/assets/data/watercolorData";
import Portfolio from "../components/Portfolio";

const Watercolor = () => {
  return (
    <>
      <section id="watercolor">
        <div className="title-section-container">
          <h2 className="text-5xl primary-color">MES AQUARELLES</h2>
        </div>
      </section>
      <Portfolio filters={filters} projects={watercolorData} />
    </>
  );
};

export default Watercolor;
