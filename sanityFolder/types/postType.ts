// types/Post.ts
export interface Post {
  _id: string;
  title: string;
  intro: string[]; // Array of paragraphs
  category: string;
  publishedAt: string;
  sections: {
    heading: string;
    body: any[]; // Rich text blocks
    sectionImage?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
  }[];
}
