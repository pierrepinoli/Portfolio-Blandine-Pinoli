/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useEffect, useState } from "react";

const Portfolio = ({ filters, projects }) => {
  const [filterKey, setFilterKey] = useState("*");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };

  useEffect(() => {
    if (filterKey === "*") {
      setFilteredProjects(projects);
    } else {
      const filteredProjects = projects.filter((project) =>
        project.available ? filterKey === "available" : filterKey === "sold"
      );
      setFilteredProjects(filteredProjects);
    }
  }, [filterKey, projects]);

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
        {filteredProjects.map((project, index) => (
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
