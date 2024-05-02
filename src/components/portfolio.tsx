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
      <section className="portfolio-container flex flex-col justify-center">
        {/* Filter Menu */}

        <ul className="portfolio-filter-menu primary-color text-4xl flex gap-6 justify-center">
          <li>
            <button
              className={`nav-link ${filterKey === "*" ? "active" : ""}`}
              onClick={() => handleFilterKeyChange("*")}
            >
              Tous
            </button>
          </li>
          {Object.keys(filters).map((key, i) => (
            <li key={i}>
              <button
                className={`nav-link ${filterKey === key ? "active" : ""}`}
                onClick={() => handleFilterKeyChange(key)}
              >
                {filters[key]}
              </button>
            </li>
          ))}
        </ul>

        {/* Project Grid */}
        <div className="projetc-grid-container m-10 p-10">
          <div className="project-grid grid grid-cols-3 gap-10 ">
            {filteredProjects.map((project, index) => (
              <div
                className="project-container flex content-center primary-color "
                key={index}
              >
                <Image
                  src={project.imageOriginal}
                  alt={project.alt}
                  layout="fill"
                  objectFit="cover"
                  className="project-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
