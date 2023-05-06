import CardVertical from "@/components/common/CardVertical";
import { useContext, useEffect, useState } from "react";
import blogContext from "@/context/context";
import axiosBase from "@/utils/axiosSetup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Loader from "@/components/common/Loader";
import CardLoadingSkeleton from "@/components/common/CardLoadingSkeleton";

const index = () => {
  const { posts, setPosts } = useContext(blogContext);
  let [articles, setArticles] = useState(posts);
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState("");

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const result = await axiosBase({
        url: "/post",
        method: "GET",
      });
      setPosts(result?.data?.data);
      setArticles(result?.data?.data);
      setIsLoading(false);
    } catch (err) {
      const errMess = err?.response?.data || "Cann't get post!";
      console.log(errMess);
      toast.error(errMess);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  const handleChangeCategory = () => {
    const filterdPosts = posts.filter((post) => post.category === cat);
    setArticles(filterdPosts);
  };

  useEffect(() => {
    if (cat === "") {
      setArticles(posts);
    } else {
      handleChangeCategory();
    }
  }, [cat]);

  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>Articles | Blogs</title>
        <meta
          name="description"
          content="Md Rakib articles about programming and tech"
        />
        <meta
          name="keywords"
          content="Md Rakib, Rakib, Mohammad Rakib, Blog, Web developer, Programmer, React.js developer, Backend Developer, Front End developer, React js, Next js, express js, tailwind css, HTML, CSS, JavaScript"
        />
      </Head>
      {isLoading ? (
        <div>
          <div className="animate-pulse flex flex-wrap gap-3 my-5 ml-3">
            <div className="h-10 w-[180px] bg-gray-700 rounded-full mb-4"></div>
            <div className="h-10 w-[180px] bg-gray-700 rounded-full mb-4"></div>
            <div className="h-10 w-[180px] bg-gray-700 rounded-full mb-4"></div>
          </div>
          <div className="grid md:grid-cols-2 place-items-center md:place-items-stretch  lg:grid-cols-3 gap-3">
            <CardLoadingSkeleton />
            <CardLoadingSkeleton />
            <CardLoadingSkeleton />
            <CardLoadingSkeleton />
            <CardLoadingSkeleton />
            <CardLoadingSkeleton />
          </div>
        </div>
      ) : (
        <div className="lg:px-6">
          <ToastContainer theme="colored" />
          <div className="px-6 md:px-0 mt-6 flex gap-3 mb-6 flex-wrap">
            <button
              className={`btn btn-sm rounded-full ${
                cat === "" && "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
              onClick={() => setCat("")}
            >
              ALL
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "Programming" &&
                "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
              onClick={() => setCat("Programming")}
            >
              Programming
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "Technology" &&
                "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
              onClick={() => setCat("Technology")}
            >
              Technology
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "News" && "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
              onClick={() => setCat("News")}
            >
              News
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "Lifestyle" &&
                "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
              onClick={() => setCat("Lifestyle")}
            >
              Lifestyle
            </button>
          </div>
          <h1 className="border-l-2 pl-2 border-yellow-500  text-xl font-bold mt-6 ml-6 md:ml-0 mb-4 text-yellow-600">
            RECENT
          </h1>
          <div className="grid md:grid-cols-2 place-items-center md:place-items-stretch  lg:grid-cols-3 gap-3">
            {articles.length > 0 &&
              articles.map(
                (post, index) =>
                  index < 3 && <CardVertical key={index} post={post} />
              )}
          </div>
          {articles.length > 3 && (
            <h1 className="border-l-2 pl-2 border-yellow-500  text-xl font-bold mt-10 ml-6 md:ml-0 mb-6 md:mb-4 text-yellow-600">
              ALL ARTICLES
            </h1>
          )}
          <div className="grid md:grid-cols-2 place-items-center md:place-items-stretch  lg:grid-cols-3 gap-3">
            {articles.length > 0 &&
              articles.map(
                (post, index) =>
                  index > 2 && <CardVertical key={index} post={post} />
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
