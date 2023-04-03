import Link from "next/link";
import Moment from "react-moment";

const CardHorizontal = ({ post }) => {
  const coverImage = post?.img_name
    ? `https://api.rakibwrites.com/uploads/${post.img_name}`
    : "https://unper.ac.id/wp-content/plugins/tutor/assets/images/placeholder-.jpg";
  return (
    <div className="card card-side bg-base-100 mb-3 md:mb-6 border-b md:border-none border-gray-300/50 rounded-none pb-3 md:pb-0">
      <figure>
        <Link href={`/blog/${post?.slug}`}>
          <img
            className="hidden md:block border max-h-[200px] md:w-[400px] object-cover rounded-md"
            src={coverImage}
            alt="Rakib"
          />
        </Link>
      </figure>
      <div className="card-body lg:w-[500px] py-0 md:py-8 px-3 lg:pl-6">
        {/* title */}
        <Link href={`/blog/${post?.slug}`}>
          <h2 className="card-title hover:text-success">
            {post?.title?.substring(0, 50)}...
          </h2>
        </Link>
        <span className="pb-0 text-gray-400">
          <Moment format="D MMM YYYY" withTitle>
            {post?.date}
          </Moment>
        </span>
        <p className="text-gray-900">{post?.short_ans?.substring(0, 150)}...</p>

        {/* ID */}
        <p className="text-sm text-gray-500 badge bg-gray-200 border-none">
          {post?.id}
        </p>
      </div>
    </div>
  );
};

export default CardHorizontal;
