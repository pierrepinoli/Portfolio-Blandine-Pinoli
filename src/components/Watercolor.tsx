"use client";

import { filters, watercolorData } from "@/assets/data/watercolorData";
import Portfolio from "../components/Portfolio";

const Watercolor = () => {
  return (
    <section id="watercolor" className="section">
      <h2>Je suis blandine Pinoli</h2>
      <p>AQUARELLE</p>
      <Portfolio filters={filters} projects={watercolorData} />
    </section>
  );
};

export default Watercolor;
