"use client";

import { filters, sculptureData } from "@/assets/data/sculptureData";
import Portfolio from "../components/Portfolio";

const Sculpture = () => {
  return (
    <section id="sculpture" className="section">
      <h2>Je suis blandine Pinoli</h2>
      <p>SCULPTURE</p>
      <Portfolio filters={filters} projects={sculptureData} />
    </section>
  );
};

export default Sculpture;
