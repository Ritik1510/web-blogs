import { useEffect, useState } from "react";
import { client } from "../../../sanityClient"; // your sanity client setup
import { Link } from "react-router-dom";

function PostPreview({ post }) {
  return (
    <Link
      to={`/${post.slug}`}
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

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      intro
    }`;

    client.fetch(query).then(setPosts);
  }, []);

  return (
    <main className="max-w-full mx-auto py-12 sm:px-4 md:px-5 lg:px-6 border-4 border-gray-400">
      <div className="grid sm:gap-5 md:gap-6 lg:gap-8 sm550:grid-cols-2 md850:grid-cols-3">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
