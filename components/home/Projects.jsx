import portfolio from "../assets/projects/NFTmarket.png";
import DoracM from "../assets/projects/DoracM.png";
import ecommerce from "../assets/projects/ecommerce.png";
import instaLong from "../assets/projects/instaLong.png";
import nftMarket from "../assets/projects/NFT.png";
import movie from "../assets/projects/movie.png";
import Link from "next/link";

const projectsData = [
  {
    title: "Crypto Swap",
    img: nftMarket,
    tech: "NEXT.JS CSS 3 Ether.js",
    url: "https://rakib38-swap.netlify.app",
  },
  {
    title: "Dorac (NFT Marketplace)",
    img: DoracM,
    tech: "React.js Ether.js Tailwind CSS CSS 3",
    url: "https://rakib-dorac-2.netlify.app/",
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
    url: "https://rakib-insta.netlify.app/",
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
    url: "https://rakib-nft-marketplace.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="mt-6 md:mt-28">
      <h1 className="text-2xl font-bold mb-2 uppercase border-l-2 border-primary pl-3">
        Projects
      </h1>
      <div>
        <h3 className="mt-6 font-semibold">
          Explore <span className="font-bold">this website</span>. This is one
          of my full-stack project (Next.js, Tailwind CSS, Express.js, MySql).
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {projectsData.map((project, index) => (
            <div key={index} className="card rounded-sm group bg-base-100">
              <Link href={project.url} target="_blank">
                <img
                  className="h-[200px] w-[340px] object-cover group-hover:scale-105 duration-200 rounded-md"
                  alt={project.title}
                  src={project.img.src}
                />
              </Link>

              <div className="card-body">
                <p className="font-semibold text-center">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
