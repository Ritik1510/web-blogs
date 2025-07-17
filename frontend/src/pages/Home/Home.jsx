
import React from "react";
import { Link } from "react-router-dom";
import civicPost from "../../components/postsData/CivicPosts.json";
import sideHustlePost from "../../components/postsData/sideHustles.json";
import japanCleaningRoutine from "../../components/postsData/japanCleaningRoutine.json";
import moonsonTracePlant from "../../components/postsData/monsoonTerracePlants.json";

const posts = [
  {
    slug: "monsoon-terrace-plant",
    title: moonsonTracePlant.title,
    image: moonsonTracePlant.image,
    intro: moonsonTracePlant.intro ? moonsonTracePlant.intro[ 0 ] : "",
  },
  {
    slug: "hustling",
    title: sideHustlePost.title,
    image: sideHustlePost.image,
    intro: sideHustlePost.intro ? sideHustlePost.intro[ 0 ] : "",
  },
  {
    
    slug: "japan-cleaning-routine",
    title: japanCleaningRoutine.title,
    image: japanCleaningRoutine.image,
    intro: japanCleaningRoutine.intro ? japanCleaningRoutine.intro[ 0 ] : "",
  },
  {
    slug: "urban-habits",
    title: civicPost.title,
    image: civicPost.image,
    intro: civicPost.introFirst || "",
  },
];

function PostPreview({ post }) {
  return (
    <Link
      to={`/${post.slug}`}
      className="block max-w-xl bg-white shadow hover:shadow-lg transition overflow-hidden group"
    >
      <div className="overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : null}

      </div>
      <div className="p-4">
        <h2 className="sm:text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-700 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 text-xl line-clamp-2">{post.intro}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="max-w-full mx-auto py-12 sm:px-4 md:px-5 lg:px-6 border-4 border-gray-400">
      <div className="grid sm:gap-5 md:gap-6lg:gap-8 sm550:grid-cols-2 md850:grid-cols-3 ">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}