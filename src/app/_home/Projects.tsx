import ProjectCart from "@/components/ProjectCart";
import React from "react";
import { ProjectsData } from "./data";

const Projects = () => {
  return (
    <div className="mt-16 md:mt-0 layout pb-16 md:py-32" id="projects">
      <h3 className="title">Projects</h3>
      <h2 className="text-accent font-extrabold pt-3 pb-10 ">
        Each project is a unique piece of development 🧩
      </h2>
      <div>
        {ProjectsData.map((item, index) => (
          <React.Fragment key={index}>
            <ProjectCart data={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
