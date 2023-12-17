import Link from "next/link";
import formateDate from "@/utils/formatDate";

const PostCard = ({ post }: { post: any }) => {
  const coverImage = post?.img_name
    ? `https://api.rakibwrites.com/uploads/${post.img_name}`
    : "https://unper.ac.id/wp-content/plugins/tutor/assets/images/placeholder-.jpg";

  return (
    <div className="card overflow-hidden max-w-[400px] min-w-[300px] duration-200 mx-auto rounded-lg group">
      <Link href={`/blog/${post?.slug}`}>
        <img
          alt="Rakib rakib articles"
          className="w-full min-h-[200px] bg-gray-500 rounded-lg object-cover lg:group-hover:scale-105 duration-200"
          //   effect="blur"
          src={coverImage}
        />
      </Link>
      <div className="p-3 lg:p-4">
        <div className="flex justify-between items-center text-gray-400">
          <span>
            {/* <Moment fromNow>{post?.date}</Moment>{" "} */}
            {formateDate(post?.date)}
          </span>
          {/* <span className="text-sm text-gray-500 bg-base-300 px-2 py-1 rounded-md">
            {post?.id}
          </span> */}
        </div>
        <Link href={`/blog/${post?.slug}`}>
          <h3 className="font-semibold text-lg hover:text-primary hover:underline mb-2">
            {post?.title}
          </h3>
        </Link>
        <p className="text-neutral">{post?.short_ans?.slice(0, 50)} ...</p>
      </div>
    </div>
  );
};

export default PostCard;
