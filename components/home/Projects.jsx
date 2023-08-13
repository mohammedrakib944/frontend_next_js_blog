import portfolio from "../assets/projects/NFTmarket.png";
import DoracM from "../assets/projects/DoracM.png";
import ecommerce from "../assets/projects/ecommerce.png";
import instaLong from "../assets/projects/instaLong.png";
import nftMarket from "../assets/projects/NFT.png";
import movie from "../assets/projects/movie.png";
import movies from "../assets/projects/movies.png";
import todo from "../assets/projects/todo.png";
import Photo from "../assets/projects/photo.png";
import EcommerceNew from "../assets/projects/Ecmmerce.png";
import Link from "next/link";

import Image from "next/image";

const projectsData = [
  {
    title: "Ecommerce with Dashboard",
    img: EcommerceNew,
    tech: "Next.js 13, Tailwind CSS, Express.js, MongoDB",
    url: "https://ecommerce-ruddy-one.vercel.app",
  },
  {
    title: "React js - Movie View",
    img: movies,
    tech: "React.js, Tailwind CSS, REST API",
    url: "https://rakib-moviex.netlify.app/",
  },
  {
    title: "React.js, Context API TODO APP",
    img: todo,
    tech: "React.js, Tailwind CSS",
    url: "https://react-context-to-do.vercel.app",
  },
  {
    title: "Photo viewer",
    img: Photo,
    tech: "Next.js 13, Tailwind CSS, Express.js",
    url: "https://photographer-frontend.vercel.app",
  },
  {
    title: "Dorac (NFT Marketplace)",
    img: DoracM,
    tech: "React.js Ether.js Tailwind CSS CSS 3",
    url: "https://rakib-dorac-2.netlify.app",
  },
  {
    title: "Ecommerce",
    img: ecommerce,
    tech: "React.js Tailwind CSS MySQL Express.js",
    url: "https://rakib-e-commerce.netlify.app",
  },
  {
    title: "Instagram Dark (Frontend)",
    img: instaLong,
    tech: "Next js Tailwind CSS",
    url: "https://rakib-insta.netlify.app",
  },
  {
    title: "Movie Details",
    img: movie,
    tech: "React js CSS 3",
    url: "https://rakib-movie.netlify.app",
  },
  {
    title: "Portfolio Website",
    img: portfolio,
    tech: "React js CSS 3 Tailwind CSS",
    url: "https://rakib-nft-marketplace.netlify.app",
  },
  {
    title: "Crypto Swap",
    img: nftMarket,
    tech: "NEXT.JS CSS 3 Ether.js",
    url: "https://rakib38-swap.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="mt-6 md:mt-28 scroll-mt-[100px]" id="projects">
      <h1 className="text-2xl font-bold mb-2 uppercase border-l-2 border-primary pl-3">
        Projects
      </h1>
      <div>
        <h3 className="mt-6 font-semibold">
          Explore <span className="font-bold">this website</span>. This is one
          of my full-stack project (Next.js, Tailwind CSS, Express.js, MySql).
        </h3>
        <div className="grid lg:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card rounded-sm bg-transparent relative group"
            >
              <Link href={project.url} target="_blank">
                <Image
                  className="h-[200px] w-full mx-auto object-cover duration-200 rounded-md"
                  alt={project.title}
                  width="100"
                  height="100"
                  src={project.img}
                />
              </Link>

              <div className="card-body absolute w-full h-1/2 rounded-b-md -bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 backdrop-blur-md bg-black/70 grid place-items-center duration-200">
                <Link href={project.url} target="_blank">
                  <p className="font-semibold text-white text-center hover:underline">
                    {project.title}
                  </p>
                </Link>
                <span className="text-xs text-gray-300">{project.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
