export interface Post {
  title: string;
  content: string;
}

export interface Message {
  message: string;
}

export interface Author {
  name: string
  picture: string
}

export interface PostType {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export type PostInfo = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  excerpt: string;
  ogImageUrl: string;
};
