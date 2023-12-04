"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axiosBase from "@/utils/axiosSetup";
import toast, { Toaster } from "react-hot-toast";
import formateDate from "@/utils/formatDate";
import Loading from "@/components/Loading";

const page = () => {
  const [posts, setPosts] = useState<any>(null);
  const [search, setSearch] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);

  // GET POSTs
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const result = await axiosBase({
        url: "/post",
        method: "GET",
      });
      setPosts(result?.data?.data);
      setIsLoading(false);
    } catch (err: any) {
      const errMess = err?.response?.data || "Cann't get post!";
      toast.error(errMess);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // DELTE POST
  const handleDelete = async (id: number) => {
    // check Token
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not valid user!");
      return;
    }

    if (confirm("It will detele Permanently?")) {
      try {
        await axiosBase({
          url: `/post/${id}`,
          method: "DELETE",
          data: { token },
        });
        toast.success("Delete Success!");
        fetchPosts();
      } catch (err: any) {
        const errMess = err?.response?.data.message || "Cann't Delete!";
        toast.error(errMess);
      }
    }
  };

  // LOGOUT
  const handleLogOut = async () => {
    if (!confirm("You want to Logout?")) return;
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (isLoading)
    return (
      <div>
        <Loading title="Getting posts..." />
      </div>
    );

  return (
    <div>
      <div className="px-6">
        <Toaster />
        <div>
          <h2 className="text-lg mt-4 font-semibold uppercase">DASHBOARD</h2>
        </div>

        {/* DASHBOARD */}
        <div className="pb-3 md:pb-0 flex flex-wrap gap-2 justify-between items-center">
          <div className="stats shadow border border-gray-600/30 my-6">
            <div className="stat place-items-center">
              <div className="stat-title">Total Articles</div>
              <div className="stat-value">{posts?.length}</div>
            </div>
            <div className="stat place-items-center">
              <Link href="/dashboard/create">
                <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-400 px-3 rounded-full flex items-center gap-2">
                  +<span className="hidden md:block">Create New</span>
                </button>
              </Link>
            </div>
            <div className="stat place-items-center">
              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-blue-600 border-none px-3 rounded-full flex items-center gap-2"
              >
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search by ID"
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered rounded-full px-5"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#id</th>
                <th>title</th>
                <th>date</th>
                <th className="text-end pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {posts &&
                posts
                  .filter((data: any) =>
                    search !== "" ? data.id === search * 1 : data
                  )
                  .map((post: any, index: number) => (
                    <tr key={index}>
                      {/* ID */}
                      <th>{post?.id}</th>
                      {/* Title */}
                      <td className="hover:text-primary">
                        <Link href={`/blog/${post?.slug}`}>
                          {post?.title.substring(0, 80)}
                        </Link>
                      </td>
                      {/* Date */}
                      <td>{formateDate(post?.date)}</td>
                      {/* Action */}
                      <td className="text-end">
                        <button
                          className="btn btn_sm bg-white text-black border hover:bg-white rounded-full"
                          onClick={() => handleDelete(post?.id)}
                        >
                          Delete &nbsp; ❌
                        </button>
                        &nbsp; &nbsp;
                        <Link href={`/dashboard/edit/${post?.slug}`}>
                          <button className="btn btn_sm btn-primary rounded-full">
                            Edit &nbsp; ✒️
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
