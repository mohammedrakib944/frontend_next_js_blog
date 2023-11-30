import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="layout min-h-screen pb-10 md:pb-0 flex flex-col justify-center gap-10">
      <div className="h-[70px] md:hidden"></div>
      <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-6 justify-between">
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-bold text-accent">
            Full-Stack Web Developer 👋🏼
          </h1>
          <p className="text-neutral mt-6">
            Hi, I'm Rakib. A Full-Stack Web Developer. Proficient in{" "}
            <span className="text-primary">JavaScript</span> and{" "}
            <span className="text-primary">React.js</span> <br /> From Pabna,
            Bangladesh 📌
          </p>
          <div className="w-fit text-lg flex mt-6 gap-3 mx-auto md:mx-0">
            <Link
              href="https://github.com/mohammedrakib944"
              className="tooltip"
              data-tip="Github"
              target="_blank"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/md-rakibuzzaman-246a701b2"
              target="_blank"
              className="tooltip"
              data-tip="Linkedin"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://www.facebook.com/md.rakib.38"
              className="tooltip"
              data-tip="Facebook"
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </div>
          <Link href="/blog">
            <button className="btn mt-12 border border-accent text-accent  hover:border-accent hover:shadow-lg duration-200 rounded-md">
              Read my articles
            </button>
          </Link>
          &nbsp; &nbsp;
          <Link
            href="https://docs.google.com/document/d/1leNqEKWa02aYm8Wl8IJfh9qz6ZTK1QNeHv2VGF6z_ME/edit?usp=sharing"
            target="_blank"
            className="btn mt-12 border border-accent text-accent  hover:border-accent hover:shadow-lg duration-200 rounded-md"
          >
            Resume
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <div className="profile-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
