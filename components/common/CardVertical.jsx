import Link from "next/link";
import Moment from "react-moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CardVertical = ({ post }) => {
  const coverImage = post?.img_name
    ? `https://api.rakibwrites.com/uploads/${post.img_name}`
    : "https://unper.ac.id/wp-content/plugins/tutor/assets/images/placeholder-.jpg";

  return (
    <div className="card overflow-hidden max-w-[400px] min-w-[340px] duration-200 border mx-auto rounded-lg border-gray-400/20 mb-4 lg:hover:scale-105">
      <Link href={`/blog/${post?.slug}`}>
        <LazyLoadImage
          alt="Rakib rakib articles"
          className="w-full h-[220px] object-cover"
          effect="blur"
          src={coverImage}
        />
      </Link>
      <div className="p-3 lg:p-4">
        <div className="flex justify-between items-center text-gray-400">
          <span>
            <Moment fromNow>{post?.date}</Moment>
          </span>
          <span className="text-sm text-gray-500 bg-base-300 px-2 py-1 rounded-md">
            {post?.id}
          </span>
        </div>
        <Link href={`/blog/${post?.slug}`}>
          <h2 className="card-title hover:text-sky-500 mb-2">{post?.title}</h2>
        </Link>
        <p className="text-gray-400">{post?.short_ans}</p>
      </div>
    </div>
  );
};

export default CardVertical;
