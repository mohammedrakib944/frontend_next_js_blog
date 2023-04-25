import Link from "next/link";
import Head from "next/head";
import { IoMdArrowRoundBack } from "react-icons/io";
import axiosBase from "@/utils/axiosSetup";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const router = useRouter();
  const { slug } = router.query;
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = async (slug) => {
    try {
      setIsLoading(true);
      const result = await axiosBase({
        url: `/post/${slug}`,
        method: "GET",
      });
      setSinglePost(result?.data?.data);
      setIsLoading(false);
    } catch (err) {
      console.log("Here is error: ", err);
      const errMess = err?.response?.data || "Server error!";
      toast.error(errMess);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>{singlePost?.title}</title>
        <meta
          name="description"
          content={singlePost?.short_ans}
          key={singlePost?.category}
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="px-6 py-2 text-gray-500 text-sm bg-[#2b2d3a] border-b border-gray-500/50 z-20 sticky top-0">
        <div className="flex justify-between gap-6">
          <Link
            className="flex gap-2 items-center text-slate-100 font-bold"
            href="/blog"
          >
            <IoMdArrowRoundBack /> All Articles
          </Link>
          <div className="flex items-center gap-2">
            <span>Written by | </span>
            <Link
              href="/"
              className="font-semibold text-slate-100 flex items-center gap-2 hover:text-success"
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
        <ToastContainer theme="colored" />
        {isLoading ? (
          // Loading Skeleton
          <div
            role="status"
            className="px-6 w-full lg:max-w-[700px] lg:pb-6 mx-auto rounded animate-pulse p-3"
          >
            <div className="flex flex-wrap gap-3">
              <div className="h-10 w-full bg-gray-700 rounded-full mb-2"></div>
              <div className="h-6 w-[250px] bg-gray-500 rounded-full mb-4"></div>
            </div>
            <div className="flex items-center justify-center h-[400px] mb-4 rounded-md bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-5 bg-gray-700 rounded-full mb-4"></div>
              <div className="h-5 bg-gray-700 rounded-full mb-4"></div>
            </div>
            <div className="h-10 bg-gray-700 rounded-full mb-2.5 mt-10"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-6"></div>

            <div className="grid grid-cols-3 gap-3">
              <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            </div>

            <div className="h-10 bg-gray-700 rounded-full mb-2.5 mt-12"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-6"></div>
          </div>
        ) : (
          <div className="px-6 w-full lg:max-w-[700px] lg:pb-6 mx-auto">
            {/* Ttile */}
            <h2 className="text-3xl font-bold mt-6 mb-1">
              {singlePost?.title}
            </h2>
            {/* Time */}
            <p className="text-neutral-content my-3">
              <span className="pb-0 text-sm text-gray-400">
                <Moment format="D MMM YYYY" withTitle>
                  {singlePost?.date}
                </Moment>
              </span>
            </p>
            {/* Poster */}
            {singlePost?.img_name && (
              <img
                className="w-full rounded-md"
                src={`https://api.rakibwrites.com/uploads/${singlePost?.img_name}`}
                alt="Rakib | blog"
              />
            )}

            {/* Description */}
            <div className="lg:text-lg pt-6">
              <div className="prose lg:text-lg">
                <ReactMarkdown>{singlePost?.description}</ReactMarkdown>
              </div>
            </div>

            {/* Google adds section */}
            {/* <div className="w-full lg:w-[468px] rounded-md h-[160px] mt-10 bg-base-200"></div> */}

            {/* Go to posts */}
            <p className="mt-16 py-4 text-lg text-secondary font-bold border-b border-t border-secondary text-center border-dashed">
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
        )}
      </div>
    </>
  );
};

export default SinglePost;
