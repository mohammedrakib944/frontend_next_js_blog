import { BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import RakibImg from "../../public/img/rakib.jpg";

const Hero = () => {
  return (
    <div className="hero mt-8 min-h-[480px] 0 rounded-xl">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <img
          src={RakibImg.src}
          alt="rakib Rakib"
          priority={true}
          width=""
          className="mask mask-squircle w-[290px] hover:-rotate-6 hover:scale-110 duration-200"
        />
        <div className="lg:ml-6">
          <h2 className="text-3xl">Hi!</h2>
          <h1 className="text-3xl lg:text-4xl font-bold flex gap-2">
            I'm
            <Typewriter
              options={{
                strings: ["Rakib", "a Programmer", "a Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-5 text-gray-400 font-semibold">
            I am a Fullstack Web Developer & Competitive Programmer
          </p>

          <a
            className="text-2xl"
            href="https://github.com/mohammedrakib944"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
