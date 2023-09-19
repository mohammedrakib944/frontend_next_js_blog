import React from "react";
import PostCard from "./_components/Card";
import { fetchPosts } from "@/utils/fetchPosts";

const page = async () => {
  const data = await fetchPosts();

  return (
    <div className="layout mt-20 mb-20">
      <div className="text-center mb-10">
        <h3 className="title mb-2">Article Blog</h3>
        <h2 className="text-3xl">
          Sharing: My Journey as a Full-Stack Developer
        </h2>
        <p className="text-neutral">
          Welcome to my corner of the web where I, a full-stack developer, share
          my insights, tips, and experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {data &&
          data.data.map((post: any, index: number) => (
            <PostCard key={index} post={post} />
          ))}
      </div>
    </div>
  );
};

export default page;
