import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { client } from "../../../../sanityClient.js"
import BlogStructure from "../../../components/ui/BlogStructure.jsx";


const LocalEntrepreneurship = () => {
  const { slug } = useParams();
  const [ post, setPost ] = useState(null);
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    category,
    publishedAt,
    intro,
    mainImage {
      asset->{ url },
      alt
    },
    sections[]{
      heading,
      sectionImage {
        asset->{ url },
        alt
      },
      body
    }
  }`;

  useEffect(() => {
    async function fetchPosts() {
      const posts = await client.fetch(query, { slug }
      );
      console.log(posts);
      setPost(posts); // If you want to display all posts
    }
    fetchPosts();
  }, []);
  if (!post) return <p>Loading...</p>;

  return <BlogStructure data={post} />;
}

export default LocalEntrepreneurship;