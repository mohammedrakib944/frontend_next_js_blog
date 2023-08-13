import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Hero from "../home/Hero";
import Link from "next/link";

const ParticlesWrapper = () => {
  const router = useRouter();

  return router.pathname === "/" ? (
    <div className="background-gradient pb-16">
      <Navbar />
      <Hero />
      <div className="h-[80px]"></div>
    </div>
  ) : (
    <Navbar />
  );
};

export default ParticlesWrapper;
