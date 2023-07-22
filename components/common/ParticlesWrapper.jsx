import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Hero from "../home/Hero";
import Link from "next/link";

const ParticlesWrapper = () => {
  const router = useRouter();

  return (
    <div className="background-gradient pb-16">
      <Navbar />
      {!router.pathname.includes("blog") && <Hero />}
      <div className="h-[80px]"></div>
    </div>
  );
};

export default ParticlesWrapper;
