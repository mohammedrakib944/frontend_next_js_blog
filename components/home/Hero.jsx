import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import RakibImg from "../../public/img/rakib.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero mt-8 min-h-[480px] 0 rounded-xl">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <Image
          src={RakibImg}
          alt="rakib Rakib"
          width=""
          property="true"
          className="mask mask-squircle w-[290px] hover:-rotate-6 hover:scale-110 duration-200"
        />
        <div className="lg:ml-6">
          <h2 className="text-3xl mb-2 text-gray-200">Hi 🙋‍♂️</h2>
          <h1 className="text-3xl text-white lg:text-4xl font-bold flex gap-2">
            I'm
            <Typewriter
              options={{
                strings: ["Rakib", "a Programmer", "a Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-2 text-white/70 font-semibold">
            Web Developer & Competitive Programmer
          </p>
          <div className="flex gap-4 mt-4 text-black">
            <a
              className="text-xl hover:text-white duration-200"
              href="https://github.com/mohammedrakib944"
              target="_blank"
              title="Github"
            >
              <BsGithub />
            </a>

            <a
              className="text-xl hover:text-white duration-200"
              href="https://www.linkedin.com/in/md-rakibuzzaman-246a701b2/"
              target="_blank"
              title="Linkedin"
            >
              <BsLinkedin />
            </a>
            <a
              className="text-xl hover:text-white duration-200"
              href="https://www.facebook.com/md.rakib.38/"
              target="_blank"
              title="Facebook"
            >
              <BsFacebook />
            </a>
          </div>
          <Link href="/blog">
            <span className="font-semibold uppercase text-xs text-white mt-6 flex items-center gap-2 hover:underline">
              Articles <AiOutlineArrowRight className="mt-[2px]" />
            </span>
          </Link>
          {/* <Link href="/blog">
            <button className="w-[300px] uppercase btn bg-black hover:bg-gray-900 border-none text-white rounded-full font-bold hover:scale-105 duration-75">
              Read My Articles
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
