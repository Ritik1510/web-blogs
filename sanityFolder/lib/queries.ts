// lib/queries.ts
export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    intro,
    category,
    publishedAt,
    sections[]{
      heading,
      body,
      sectionImage{
        asset->{_id, url},
        alt
      }
    }
  }
`;
