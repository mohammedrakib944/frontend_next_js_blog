import React from "react";
import Image from "next/image";
import { FrontEnd, BackEnd } from "./data";

const Skills = () => {
  return (
    <div
      className="layout text-center mb-24 md:mb-36 scroll-mt-[100px]"
      id="skills"
    >
      <h3 className="title">Tech Stack</h3>
      <h2 className="text-accent font-extrabold pt-3 pb-10 ">
        Main Tech Stacks ⚙️
      </h2>
      <div>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap justify-center gap-3 mx-auto">
            {FrontEnd.map((item, index) => (
              <React.Fragment key={index}>
                <Image
                  className="bg-white hover:scale-105 duration-200 rounded-lg shadow-md w-[100px]"
                  src={item.image}
                  alt="Md Rakib"
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex mt-3 flex-wrap justify-center gap-3 mx-auto">
            {BackEnd.map((item, index) => (
              <React.Fragment key={index}>
                <Image
                  className="bg-white hover:scale-105 duration-200 rounded-lg shadow-md w-[100px]"
                  src={item.image}
                  alt="Md Rakib"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
