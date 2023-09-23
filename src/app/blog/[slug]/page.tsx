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

// Daynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getData(params.slug);
    const { title, slug, short_ans } = post.data;
    return {
      title,
      description: short_ans,
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
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
