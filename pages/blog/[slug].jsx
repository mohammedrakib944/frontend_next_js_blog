import Link from "next/link";
import Head from "next/head";
import { IoMdArrowRoundBack } from "react-icons/io";
import axiosBase from "@/utils/axiosSetup";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouter } from "next/router";

// get all the possible paths for the individual ingskyients
export async function getStaticPaths() {
  const { data } = await axiosBase("/post");
  const paths = data?.data?.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

// This gets called on every request
export async function getStaticProps({ params }) {
  const { slug } = params;
  // Fetch data from external API
  const res = await axiosBase(`/post/${slug}`);
  const data = res.data;
  return { props: { data } };
}

// MAIN PAGE
const SinglePost = ({ data }) => {
  const Post = data?.data;

  return (
    <>
      <Head>
        <title>{Post?.title}</title>
        <meta
          name="description"
          content={Post?.short_ans}
          key={Post?.category}
        />
        <meta property="og:title" content={Post.title} />
        <meta
          name="keywords"
          content="Md Rakib, Rakib, Mohammad Rakib, Blog, Web developer, Programmer, React.js developer, Backend Developer, Front End developer, React js, Next js, express js, tailwind css, HTML, CSS, JavaScript"
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="px-6 py-2 mt-3 backdrop-blur-lg text-gray-500 text-sm border-gray-500/50 bg-indigo-600 ">
        <div className="flex justify-between gap-6">
          <Link
            className="flex gap-2 items-center text-slate-100 font-bold"
            href="/blog"
          >
            <IoMdArrowRoundBack /> All Articles
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Written by | </span>
            <Link
              href="/"
              className="font-semibold text-white flex items-center gap-2 hover:underline"
            >
              <img
                className="rounded-full border"
                width="33"
                src="/img/rakib2.jpg"
                alt="Rakib"
              />{" "}
              Mohammad Rakib
            </Link>
          </div>
        </div>
      </div>

      <div className="flex lg:gap-6">
        <div className="px-6 w-full lg:max-w-[700px] lg:pb-6 mx-auto">
          {/* Ttile */}
          <h2 className="text-3xl font-bold mt-10 mb-1">{Post?.title}</h2>
          {/* Time */}
          <p className="text-neutral-content my-3">
            <span className="pb-0 text-sm text-gray-400">
              <Moment format="D MMM YYYY" withTitle>
                {Post?.date}
              </Moment>
            </span>
          </p>
          {/* Poster */}
          {Post?.img_name && (
            <LazyLoadImage
              alt="Rakib rakib articles"
              className="w-full rounded-md"
              effect="blur"
              src={`https://api.rakibwrites.com/uploads/${Post?.img_name}`}
            />
          )}

          {/* Description */}
          <div className="lg:text-lg pt-6">
            <div className="prose lg:text-lg">
              <ReactMarkdown>{Post?.description}</ReactMarkdown>
            </div>
          </div>

          {/* Google adds section */}
          {/* <div className="w-full lg:w-[468px] rounded-md h-[160px] mt-10 bg-base-200"></div> */}

          {/* Go to posts */}
          <p className="mt-16 py-4 text-lg text-sky-500 font-bold border-b border-t border-sky-600 text-center border-dashed">
            THE END!
          </p>
          {/* <div className=" mb-10 pt-6 border-t border-secondary">
            <Link
              className="flex gap-3 items-center text-secondary font-bold"
              href="/blog"
            >
              <IoMdArrowRoundBack /> All Articles
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
