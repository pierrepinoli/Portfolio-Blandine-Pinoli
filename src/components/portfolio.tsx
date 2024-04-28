/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

import { oilData } from "@/assets/data/oilData"; // Remplace require par import
const filters = oilData.filter;

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState(oilData);

  const handleFilterKeyChange = (key: string) => {
    setFilterKey(() => key);
  };

  useEffect(() => {
    if (filterKey === "*") {
      setProjects(oilData);
    } else {
      const filteredProjects = oilData.filter(
        (project: { categories: string[] }) =>
          project.categories.includes(filterKey)
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
        {Object.keys(filters).map((key, i) => (
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
        {projects.map((project: any, index: number) => (
          <div className="project" key={index}>
            <img src={project.imageWebp} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
