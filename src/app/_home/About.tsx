import React from "react";
import Nextjs from "../../assets/rakibdev.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-base-200 py-16 md:py-32" id="about">
      <div className="layout flex flex-col items-center md:flex-row gap-10">
        <div>
          <Image
            className="max-w-[360px] md:max-w-[400px] rounded-lg"
            src={Nextjs}
            alt="Next.js | Rakibuzzman | Rakib | Front-end Developer"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="title">about me</h3>
          <h2 className="py-4 text-accent font-extrabold">
            I'm Md.Rakibuzzaman, a computer science student. And a dedicated Web
            Developer. 🧑‍💻
          </h2>
          <h4 className="text-neutral">
            And I am self-motivated and detail-oriented developer who constantly
            seeks to improve his skills and stay up-to-date with the latest
            trends and technologies in the field.
            <br />I have extensive experience in building complex web
            applications from scratch to production, as well as maintaining and
            improving existing applications.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
