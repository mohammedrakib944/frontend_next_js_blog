import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import RakibImg from "../../public/img/rakib.jpg";

const Hero = () => {
  return (
    <div className="hero mt-8 min-h-[480px] 0 rounded-xl">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <img
          src={RakibImg.src}
          alt="rakib Rakib"
          width=""
          property="true"
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
          <div className="flex gap-4">
            <a
              className="text-2xl hover:text-yellow-400"
              href="https://github.com/mohammedrakib944"
              target="_blank"
              title="Github"
            >
              <BsGithub />
            </a>

            <a
              className="text-2xl hover:text-yellow-400"
              href="https://www.linkedin.com/in/md-rakibuzzaman-246a701b2/"
              target="_blank"
              title="Linkedin"
            >
              <BsLinkedin />
            </a>
            <a
              className="text-2xl hover:text-yellow-400"
              href="https://www.facebook.com/md.rakib.38/"
              target="_blank"
              title="Facebook"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
