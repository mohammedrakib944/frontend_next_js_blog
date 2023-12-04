import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/javascript.png";
import tailwind from "../../assets/skills/tailwind.png";
import react from "../../assets/skills/react.png";
import next from "../../assets/skills/next.png";
import next13 from "../../assets/skills/next13.png";
import cpp from "../../assets/skills/cpp.png";
import node from "../../assets/skills/node.png";
import express from "../../assets/skills/express.png";
import mongo from "../../assets/skills/mongo.png";
import mysql from "../../assets/skills/mysql.png";

import github from "../../assets/icons/github.png";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import rightArrow from "../../assets/icons/right.png";
import mail from "../../assets/icons/mail.png";
import location from "../../assets/icons/location.png";

import dorac from "../../assets/projects/dorac.png";
import ecommerce from "../../assets/projects/ecommerce.png";
import instagram from "../../assets/projects/instagram.png";
import movie from "../../assets/projects/movie.png";
import portfolio from "../../assets/projects/portfolio.png";
import todo from "../../assets/projects/todo.png";
import articleBlog from "../../assets/projects/articleblog.png";

export const Icons = {
  facebook,
  github,
  linkedin,
  rightArrow,
  mail,
  location,
};

export const FrontEnd = [
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

export const BackEnd = [
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

export const ProjectsData = [
  {
    id: 1,
    image: articleBlog,
    reverse: true,
    title: "Article Blog - Full Stack",
    date: "November 2023",
    description:
      "Multi vendor website - A article Blog site. Where user can create account using there google or Github account, write article and publish them. Other users can comment. It has admin panel too. Where admin can perform all common task, like banned user, delete article, etc. It can toogle between light and dark mode.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Express.js",
      "MySql",
    ],
    github: "https://github.com/mohammedrakib944/blog-frontend",
    live: "https://rakib-blog.vercel.app",
  },
  {
    image: ecommerce,
    reverse: false,
    title: "Ecommerce",
    date: "April 2023",
    description:
      "A ecommerce store. That allow sellers to upload products and customers can Add item to cart and buy them.",
    tech: ["Next.js 13", "Redux", "Tailwind CSS", "Express.js", "MongoDB"],
    github: "https://github.com/mohammedrakib944/ecommerce",
    live: "https://ecommerce-ruddy-one.vercel.app/",
  },
  {
    image: movie,
    reverse: true,
    title: "Movie Review",
    date: "March 2022",
    description:
      "A movie/series Review platform with awesome UI/UX where users can search for almost any movie and see all details about that movie and series.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Rest API"],
    github: "https://github.com/mohammedrakib944/Movie_Review",
    live: "https://rakib-moviex.netlify.app/",
  },

  {
    image: todo,
    reverse: false,
    title: "To-Do (Advance)",
    date: "April 2023",
    description:
      "A advance to-do applicatoin. Where user can set date, add reminder. It has awesome design and sound effect.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/mohammedrakib944/React-context-ToDo",
    live: "https://react-context-to-do.vercel.app/",
  },
  {
    image: instagram,
    reverse: true,
    title: "Instagram clone",
    date: "July 2022",
    description:
      "It's just a frontend and Home page, where user can story. It dosen't have any backend.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/mohammedrakib944/insta_dark",
    live: "https://rakib-insta.netlify.app/",
  },
  {
    image: portfolio,
    reverse: false,
    title: "Landing Page",
    date: "February 2022",
    description: "A landing website for a US client. With awesome animation.",
    tech: ["React.js", "CSS 3"],
    github: "https://github.com/mohammedrakib944/rakib-portfolio",
    live: "https://rakib-nft-marketplace.netlify.app/",
  },
  {
    image: dorac,
    reverse: true,
    title: "Dorac",
    date: "August 2021",
    description: "A landing website for a US client. With awesome animation.",
    tech: ["React.js", "CSS 3"],
    github: "https://github.com/mohammedrakib944/dorac-2.0",
    live: "https://rakib-dorac-2.netlify.app/",
  },
];
