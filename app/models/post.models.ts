export interface Post {
  title: string;
  content: string;
}

export interface Message {
  message: string
}


export interface PostType {
  slug: string
  title: string
  date: string
  coverImage: string
  author: string
  excerpt: string
  ogImageUrl: string
  content: string
}