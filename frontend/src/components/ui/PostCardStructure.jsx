import { Link } from "react-router-dom";

export default function PostPreview({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block max-w-xl bg-white shadow hover:shadow-lg transition overflow-hidden group"
    >
      {post.image && (
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="sm:text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-700 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 text-xl line-clamp-2">
          {post.intro?.[0] || ""}
        </p>
      </div>
    </Link>
  );
}