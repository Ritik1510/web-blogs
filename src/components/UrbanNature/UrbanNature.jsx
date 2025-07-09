import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
import sideHustlePost from "../postsData/sideHustles.json";
import digitalBazarOnlineServices from "../postsData/digitalBazarOnline.json"

const subCategoryArray = [
  "Local Entrepreneurship",
  "Crafting"
];

const posts = [
  {
    slug: "",
    title: sideHustlePost.title,
    image: sideHustlePost.image,
    intro: sideHustlePost.intro ? sideHustlePost.intro[ 0 ] : "",
  }
];

function PostPreview({ post }) {
  return (
    <div>
      <Link
        to={`${post.slug}`}
        className="grid bg-white shadow hover:shadow-lg transition overflow-hidden group"
      >
        <div className="overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
    </div>
  );
}

export default function UrbanNature() {
  // This will be truthy only on the exact /hustling route
  const isRoot = useMatch("/hustling");

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {isRoot && (
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      )}
      <Outlet />
    </main>
  );
}