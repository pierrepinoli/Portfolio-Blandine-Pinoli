"use client";

import { acrylicData, filters } from "@/assets/data/acrylicData";
import Portfolio from "../components/Portfolio";

const Acrylic = () => {
  return (
    <section id="acrylic" className="section">
      <h2>Je suis blandine Pinoli</h2>
      <p>ACRYLIQUE</p>
      <Portfolio filters={filters} projects={acrylicData} />
    </section>
  );
};

export default Acrylic;
