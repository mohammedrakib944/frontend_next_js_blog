import React from "react";
import Image from "next/image";
import { Icons } from "./data";
import Link from "next/link";

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
            Hi, I'm Rakib. A Full-Stack Web Developer. Expert on
            React.js/Next.js. <br /> From Pabna, Bangladesh 📌
          </p>
          <div className="w-fit flex mt-6 gap-2 mx-auto md:mx-0">
            <Link href="https://github.com/mohammedrakib944" target="_blank">
              <Image
                className="w-6 opacity-70 hover:opacity-100 duration-200"
                src={Icons.github}
                alt="Github"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/md-rakibuzzaman-246a701b2"
              target="_blank"
            >
              <Image
                className="w-6 opacity-70 hover:opacity-100 duration-200"
                src={Icons.linkedin}
                alt="Github"
              />
            </Link>

            <Link href="https://www.facebook.com/md.rakib.38" target="_blank">
              <Image
                className="w-6 opacity-70 hover:opacity-100 duration-200"
                src={Icons.facebook}
                alt="Github"
              />
            </Link>
          </div>

          <Link href="/blog">
            <button className="btn mt-12 bg-gradient-to-r bg-white border-2 border-accent text-accent hover:bg-white hover:border-accent hover:shadow-lg duration-200 rounded-md">
              Read my articles
            </button>
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
