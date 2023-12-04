"use client";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosBase from "@/utils/axiosSetup";

const page = ({ params }: { params: { slug: string } }) => {
  const [title, setTitle] = useState("");
  const [shortAns, setShortAns] = useState("");
  const [category, setCategory] = useState("Programming");
  const [markdownText, setMarkdownText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [postID, setPostID] = useState("");

  //  GET POST
  const fetchPost = async (slug: string) => {
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
    } catch (err: any) {
      const errMess = err?.response?.data || "Server error!";
      toast.error(errMess);
    }
  };

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug);
    }
  }, [params.slug]);

  // CREATE POST
  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsLoading(true);
    const sendingData = {
      title,
      short_ans: shortAns,
      description: markdownText,
      category,
      token,
    };
    //Sending to backend
    try {
      await axiosBase({
        url: `/post/${postID}`,
        method: "PATCH",
        data: sendingData,
        withCredentials: true,
      });
      toast.success("Edited success!");
      setIsLoading(false);
    } catch (err: any) {
      let errMessage = err.response?.data?.message || "Cannot added Post!";
      toast.error(errMessage);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="px-6">
        <Toaster />
        <Link
          className="flex gap-3 items-center text-sky-500"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <br />
        <form onSubmit={handleCreatePost}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            className="w-full py-3 mb-3 text-2xl font-semibold focus:outline-none bg-transparent"
          />
          <input
            type="text"
            value={shortAns}
            onChange={(e) => setShortAns(e.target.value)}
            placeholder="Short answer..."
            className="w-full py-3 mb-3 focus:outline-none bg-transparent"
          />

          <textarea
            className="w-full min-h-[400px] border p-4  focus:outline-none"
            placeholder="Description..."
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div className="flex flex-wrap items-center mt-10 gap-6 mb-10">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered select-bordesky"
              >
                <option>Programming</option>
                <option>Technology</option>
                <option>Lifestyle</option>
                <option>News</option>
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
                Cancle
              </button>
            </Link>
            <button
              disabled={isLoading}
              type="submit"
              className="btn bg-primary text-white hover:bg-blue-600 rounded-full px-6"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
