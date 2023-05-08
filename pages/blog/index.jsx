import CardVertical from "@/components/common/CardVertical";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { AiOutlineSearch } from "react-icons/ai";
import { APIURL } from "@/utils/axiosSetup";

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${APIURL}/post`);
  const data = await res.json();
  return { props: { data } };
}

export default function index({ data }) {
  const [articles, setArticles] = useState([]);
  const [cat, setCat] = useState(""); // For Category
  const [searchText, setSearchText] = useState("");

  // SET ARTICLES TO DATA
  const setDataOnArticles = () => {
    setArticles(data?.data);
  };

  // HANDLE CATEGORY
  const handleChangeCategory = () => {
    const filterdPosts = data?.data?.filter((post) => post.category === cat);
    setArticles(filterdPosts);
  };

  useEffect(() => {
    handleChangeCategory();
  }, [cat]);

  useEffect(() => {
    setDataOnArticles();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>Articles | Blogs</title>
        <meta
          name="description"
          content="Md Rakib articles about programming and tech | Top skilled Web Developer"
        />
        <meta
          name="keywords"
          content="Md Rakib, Rakib, Mohammad Rakib,Best web developer in Bangladesh, Top web developer, web developer, Skilled Web developer, best programmer, Blog, Web developer, Programmer, React.js developer, Backend Developer, Front End developer, React js, Next js, express js, tailwind css, HTML, CSS, JavaScript"
        />
      </Head>

      <div className="lg:px-6">
        <div className="flex items-center max-w-[380px] bg-base-300 border border-gray-200/20 mx-auto rounded-full overflow-hidden mt-10 mb-3">
          <input
            type="text"
            placeholder="Search.."
            className="w-full text-lg py-3 px-6 bg-transparent focus:outline-none"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="p-4 text-xl text-gray-200/50">
            <AiOutlineSearch />
          </span>
        </div>
        <h1 className="border-l-2 pl-2 border-yellow-500  text-xl font-bold mt-6 ml-6 md:ml-0 mb-4 text-yellow-600">
          Aticles
        </h1>
        <div className="px-6 md:px-0 mt-6 flex gap-3 mb-6 flex-wrap">
          <button
            className={`btn btn-sm rounded-full bg-orange-500 text-black hover:bg-orange-400`}
            onClick={setDataOnArticles}
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
        <div className="md:columns-2 lg:columns-3 gap-4">
          {data &&
            articles
              .filter((post) =>
                post.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((post, index) => <CardVertical key={index} post={post} />)}
        </div>
      </div>
    </>
  );
}
