/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useEffect, useState } from "react";

interface PortfolioProps {
  filters: any[];
  projects: any[];
}

const Portfolio: React.FC<PortfolioProps> = ({ filters, projects }) => {
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
        <div className="projetc-grid-container mx-auto m-10 p-10">
          <div className="project-grid grid grid-cols-4 gap-4">
            {filteredProjects.map((project, index) => (
              <div
                className="project-container overflow-hidden flex justify-center items-center content-center primary-color relative"
                key={index}
              >
                <Image
                  src={project.imageOriginal}
                  alt={project.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
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
