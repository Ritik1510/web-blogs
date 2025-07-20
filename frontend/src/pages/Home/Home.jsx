import client from "../../../sanityClient";
import { allPostsQuery } from "../../queries/queries";
import { useEffect, useState } from "react";
import PostCardStructure from "../../components/ui/PostCardStructure.jsx";
export default function Home() {
  const [ posts, setPosts ] = useState([]);

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
          <PostCardStructure key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
