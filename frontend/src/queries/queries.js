// src/sanity/queries/blogQueries.js

export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  intro
}`;

export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
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
  }
`;
