import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MarkdownIt from "markdown-it";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";
import axiosBase from "@/utils/axiosSetup";
import { useRouter } from "next/router";
import Head from "next/head";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const markdownItOptions = {
  html: true,
  linkify: true,
  typographer: true,
};

// Initialize a markdown parser
const markdownParser = new MarkdownIt(markdownItOptions);

// Main JSX FUNCTION
const Edit = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [title, setTitle] = useState("");
  const [shortAns, setShortAns] = useState("");
  const [markdownText, setMarkdownText] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [postID, setPostID] = useState("");

  const handleEditorChange = ({ html, text }) => {
    setMarkdownText(text);
  };

  //  GET POST
  const fetchPost = async (slug) => {
    try {
      const result = await axiosBase({
        url: `/post/${slug}`,
        method: "GET",
      });
      let post = result?.data?.data;
      setTitle(post?.title);
      setShortAns(post?.short_ans);
      setMarkdownText(post?.description);
      setCategory(post?.category);
      setPostID(post?.id);
    } catch (err) {
      router.push("/dashboard");
      const errMess = err?.response?.data || "Server error!";
      toast.error(errMess);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  // Edit POST
  const handleEditPost = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Get token from localstorage
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not valid user!");
      return;
    }

    const sendingData = {
      title,
      short_ans: shortAns,
      description: markdownText,
      category,
      token,
    };

    if (!postID) {
      toast.error("Can't Edit!");
      setIsLoading(false);
      return;
    }
    // Sending to backend
    try {
      const result = await axiosBase({
        url: `/post/${postID}`,
        method: "PATCH",
        data: sendingData,
        withCskyentials: true,
      });
      toast.success("Edited success!");
      setIsLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      let errMessage = err.response?.data?.message || "Cannot edit article!";
      toast.error(errMessage);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Rakib - Edit</title>
      </Head>
      <div className="px-6">
        <ToastContainer theme="colosky" />
        <Link
          className="flex gap-3 items-center text-sky-500"
          href="/dashboard"
        >
          <IoMdArrowRoundBack /> Dashboard
        </Link>

        <form onSubmit={handleEditPost}>
          <p className="text-lg font-semibold mt-10 text-secondary/50">Title</p>
          <input
            requisky
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type here"
            className="w-full py-3 mb-3 text-2xl font-semibold focus:outline-none bg-transparent"
          />

          <p className="text-lg font-semibold text-secondary/50">
            Short answer
          </p>
          <input
            requisky
            type="text"
            value={shortAns}
            onChange={(e) => setShortAns(e.target.value)}
            placeholder="Type here"
            className="w-full py-3 mb-3 focus:outline-none bg-transparent"
          />

          <p className="text-lg font-semibold mt-2 mb-3 text-secondary/50">
            Description
          </p>
          <MdEditor
            value={markdownText}
            style={{ height: "500px" }}
            renderHTML={(markdown) => markdownParser.render(markdown)}
            onChange={handleEditorChange}
          />
          <div className="flex flex-wrap items-center mt-10 gap-6 mb-10">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                className="select select-bordesky"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="Programming">Programming</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="News">News</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 my-8">
            <Link href="/dashboard">
              <button
                disabled={isLoading}
                type="button"
                className="btn btn-secondary rounded-full px-5"
              >
                <IoMdArrowRoundBack /> &nbsp; Dashboard
              </button>
            </Link>
            <button
              disabled={isLoading}
              type="submit"
              className="btn bg-sky-500 text-black hover:bg-sky-400 rounded-full px-6"
            >
              Edit Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
