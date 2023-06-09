import Achivement from "@/components/home/Achivement";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rakib | Web Developer | Full Stack</title>
        <meta
          name="google-site-verification"
          content="Gm6oaQ-g7cZq1rBMNPshtqbU65XJerVnXUo-3tmpMfs"
        />
        <meta
          name="description"
          content="Md.Rakib Full Stack Web Developer | Best web developer in Bangladesh | High skilled web developer"
        />
        <meta
          name="keywords"
          content="Best web developer in Bangladesh, Top web developer, web developer, Skilled Web developer, best programmer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <main className="setBG">
        <div className="px-6">
          <Hero />
          <div className="pt-2 pb-4 flex flex-col justify-center items-center">
            <Link href="/blog">
              <button className="w-[300px] btn bg-yellow-500 hover:bg-yellow-400 border-none text-black rounded-full font-bold hover:scale-105 duration-75">
                Read My Articles
              </button>
            </Link>
          </div>
        </div>
        <div className="px-6">
          <Services />
          <Projects />
          <Skills />
          <Achivement />
          <Info />
        </div>
      </main>
    </>
  );
}
