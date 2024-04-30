/* eslint-disable @next/next/no-img-element */

import { filters, oilData } from "@/assets/data/oilData";
import Image from "next/image";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState(oilData);

  const handleFilterKeyChange = (key: string) => {
    setFilterKey(key);
  };

  useEffect(() => {
    if (filterKey === "*") {
      setProjects(oilData);
    } else {
      const filteredProjects = oilData.filter((project) =>
        project.available ? filterKey === "available" : filterKey === "sold"
      );
      setProjects(filteredProjects);
    }
  }, [filterKey]);

  return (
    <>
      {/* Filter Menu */}
      <ul className="portfolio-menu">
        <li>
          <button
            className={filterKey === "*" ? "active" : ""}
            onClick={() => handleFilterKeyChange("*")}
          >
            Tous
          </button>
        </li>
        {Object.keys(filters).map((key: string, i: number) => (
          <li key={i}>
            <button
              className={filterKey === key ? "active" : ""}
              onClick={() => handleFilterKeyChange(key)}
            >
              {filters[key]}
            </button>
          </li>
        ))}
      </ul>

      {/* Project Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <Image
              src={project.imageOriginal}
              alt={project.alt}
              width={300}
              height={300}
            />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
