"use client";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useState, useContext } from "react";
import axiosBase from "@/utils/axiosSetup";

const page = () => {
  const [title, setTitle] = useState("");
  const [shortAns, setShortAns] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Programming");
  const [markdownText, setMarkdownText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      image,
      token,
    };
    //Sending to backend
    try {
      await axiosBase({
        url: "/post",
        method: "POST",
        data: sendingData,
        headers: {
          accept: "application/json",
          "Content-Type": `multipart/form-data;`,
        },
      });

      toast.success("Post added!");
      setIsLoading(false);

      // Set all to NULL
      setTitle("");
      setShortAns("");
      setImage("");
      setCategory("Programming");
      setMarkdownText("");
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
                <span className="label-text">Cover Image</span>
              </label>
              <input
                type="file"
                name="images"
                onChange={(e: any) => setImage(e.target.files[0])}
                className="file-input input-bordered file-input-bordesky w-full max-w-xs"
              />
            </div>

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
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
