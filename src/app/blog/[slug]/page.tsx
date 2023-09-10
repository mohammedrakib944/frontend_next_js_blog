import React from "react";
import apiURL from "@/api/baseURL";
import formateDate from "@/utils/formatDate";
import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";

async function getData(slug: string) {
  const res = await fetch(`${apiURL}/post/${slug}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const page = async ({ params }: { params: { slug: string } }) => {
  const post = await getData(params.slug);
  const { title, date, img_name, description } = post.data;
  return (
    <div className="mt-24 max-w-[750px] mx-auto px-4  mb-20">
      <h2 className="text-4xl text-accent">{title}</h2>
      <p className="text-neutral my-3">{formateDate(date)}</p>
      <div>
        <img
          alt="Rakib rakib articles"
          className="w-full rounded-md"
          src={`https://api.rakibwrites.com/uploads/${img_name}`}
        />
      </div>
      <div className="prose mt-4 lg:text-lg">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default page;
