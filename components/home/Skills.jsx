import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import tailwind from "../assets/skills/tailwind.png";
import react from "../assets/skills/react.png";
import next from "../assets/skills/next.png";
import next13 from "../assets/skills/next13.png";
import cpp from "../assets/skills/cpp.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import mongo from "../assets/skills/mongo.png";
import mysql from "../assets/skills/mysql.png";

import Image from "next/image";

const FrontEnd = [
  {
    title: "HTML 5",
    image: html,
  },
  {
    title: "CSS 3/4",
    image: css,
  },
  {
    title: "Tailwind CSS",
    image: tailwind,
  },
  {
    title: "Javascript",
    image: javascript,
  },
  {
    title: "React.js",
    image: react,
  },
  {
    title: "Next.js",
    image: next,
  },
];

const BackEnd = [
  {
    title: "C++",
    image: cpp,
  },
  {
    title: "Node.js",
    image: node,
  },
  {
    title: "Express.js",
    image: express,
  },
  {
    title: "Next.js 13",
    image: next13,
  },
  {
    title: "MongoDB",
    image: mongo,
  },
  {
    title: "MySQL",
    image: mysql,
  },
];

const Skills = () => {
  return (
    <div className="mt-6 md:mt-28 scroll-mt-[100px]" id="skills">
      <h1 className="text-2xl font-bold mb-2 border-l-2 border-primary pl-3">
        SKILLS
      </h1>

      <div>
        <h3 className="px-6 py-3 my-6 font-semibold text-[#fc00ff] border-b border-[#fc00ff] text-xl w-fit mx-auto">
          Front-End
        </h3>
        <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-6 place-items-center">
          {FrontEnd.map((item, index) => (
            <div className="flex flex-col items-center gap-3" key={index}>
              <Image
                className="rounded-full w-[80px] lg:w-[115px] h-[80px] lg:h-[115px] shadow-md shadow-sky-400 hover:shadow-none duration-150"
                src={item.image}
                width="115"
                height="115"
                alt={item.title}
              />
              <p className="text-sm md:text-base font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <h3 className="px-6 py-3 my-6 font-semibold text-sky-500 border-b border-sky-500 text-xl w-fit mx-auto">
          Back-End
        </h3>
        <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-6 place-items-center">
          {BackEnd.map((item, index) => (
            <div className="flex flex-col items-center gap-3" key={index}>
              <Image
                className="rounded-full w-[80px] lg:w-[115px] h-[80px] lg:h-[115px] shadow-md shadow-sky-400 hover:shadow-none duration-150"
                src={item.image}
                width="115"
                height="115"
                alt={item.title}
              />
              <p className="text-sm md:text-base font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default Skills;
