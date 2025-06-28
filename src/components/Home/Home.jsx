import React from "react";
import { Link } from "react-router-dom";
import civicPost from "../postsData/CivicPosts.json";
import sideHustlePost from "../postsData/sideHustles.json";
import japanCleaningRoutine from "../postsData/japanCleaningRoutine.json";
import moonsonTracePlant from "../postsData/moonsonTracePlant.json";

const posts = [
  {
    slug: "hustling",
    title: sideHustlePost.title,
    image: sideHustlePost.image,
    intro: sideHustlePost.intro ? sideHustlePost.intro[ 0 ] : "",
  },
  {
    slug: "culture",
    title: civicPost.title,
    image: civicPost.image,
    intro: civicPost.introFirst || "",
  },

  {
    slug: "japan-cleaning-routine",
    title: japanCleaningRoutine.title,
    image: japanCleaningRoutine.image,
    intro: japanCleaningRoutine.intro ? japanCleaningRoutine.intro[ 0 ] : "",
  },
  {
    slug: "monsoon-tracers",
    title: moonsonTracePlant.title,
    image: moonsonTracePlant.image,
    intro: moonsonTracePlant.intro ? moonsonTracePlant.intro[ 0 ] : "",
  }
];

function PostPreview({ post }) {
  return (
    <Link
      to={`/${post.slug}`}
      className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
    >
      <div className="overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : null}

      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-700 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2">{post.intro}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}