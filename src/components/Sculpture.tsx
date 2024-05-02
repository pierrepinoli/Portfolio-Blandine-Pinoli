"use client";

import { filters, sculptureData } from "@/assets/data/sculptureData";
import Portfolio from "../components/Portfolio";

const Sculpture = () => {
  return (
    <>
      <section id="sculpture">
        <div>
          <h2 className="text-5xl primary-color">MES SCULPTURES</h2>
        </div>
      </section>
      <Portfolio filters={filters} projects={sculptureData} />
    </>
  );
};

export default Sculpture;
