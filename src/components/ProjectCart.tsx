import React from "react";
import { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

type ProjectType = {
  id?: number;
  image: StaticImageData;
  reverse: boolean;
  title: string;
  date: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

const ProjectCart = ({ data }: { data: ProjectType }) => {
  return (
    <>
      {data?.id === 1 ? (
        <div className="bg-base-200 w-full rounded-xl p-4 mb-8">
          <h3 className="font-bold mb-2">
            {data.title}
            <span className="text-sm text-neutral"> ({data.date})</span>
          </h3>
          <div className="md:order-2 min-w-[300px] lg:min-w-[400px] lg:h-[450px] rounded-lg border border-base-300 overflow-hidden">
            <Link href={data.live} target="_blank">
              <Image
                className="project-image duration-1000"
                src={data.image}
                alt="ecommerce"
              />
            </Link>
          </div>
          <div className="order-1 mt-3 text-center">
            <div className="pb-3">
              <p className="text-neutral">{data.description}</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-3 py-4">
              {data.tech.map((tech, index) => (
                <li
                  key={index}
                  className="w-fit rounded-md px-4 py-2 border border-base-300 text-sm font-semibold"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-6 my-3">
              <Link
                href={data.github}
                target="_blank"
                className="flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
              >
                <FaGithub />
                GitHub
              </Link>
              <Link
                href={data.live}
                target="_blank"
                className="flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
              >
                <FaArrowRightLong />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-base-200 w-full flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl mb-8">
          <div
            className={
              data.reverse
                ? "md:order-2 min-w-[300px] lg:min-w-[400px] h-[250px] rounded-lg border border-base-300 overflow-hidden"
                : "min-w-[300px] lg:min-w-[400px] h-[250px] rounded-lg border border-base-300 overflow-hidden"
            }
          >
            <Link href={data.live} target="_blank">
              <Image
                className="project-image duration-1000"
                src={data.image}
                alt="ecommerce"
              />
            </Link>
          </div>
          <div className={data.reverse ? "order-1 text-center" : "text-center"}>
            <div>
              <h3 className="font-bold mb-2">
                {data.title}
                <span className="text-sm text-neutral"> ({data.date})</span>
              </h3>
              <p className="text-neutral">{data.description}</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-3 py-4">
              {data.tech.map((tech, index) => (
                <li
                  key={index}
                  className="w-fit rounded-md px-4 py-2 border border-base-300 text-sm font-semibold"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-6">
              <Link
                href={data.github}
                target="_blank"
                className="flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
              >
                <FaGithub />
                GitHub
              </Link>
              <Link
                href={data.live}
                target="_blank"
                className="flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
              >
                <FaArrowRightLong />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCart;
