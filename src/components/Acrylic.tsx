"use client";

import { acrylicData, filters } from "@/assets/data/acrylicData";
import Portfolio from "../components/Portfolio";

const Acrylic = () => {
  return (
    <>
      <section id="acrylic">
        <h2 className="text-5xl">MES PEINTURES À L'ACRYLIQUE</h2>
      </section>
      <Portfolio filters={filters} projects={acrylicData} />
    </>
  );
};

export default Acrylic;
