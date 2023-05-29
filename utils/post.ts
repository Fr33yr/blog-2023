import { PostType, Author } from "@/app/models";

export class Post {
  post: PostType;

  constructor({
    slug,
    title,
    date,
    coverImage,
    author,
    excerpt = "",
    ogImage = { url: "" },
    content,
  }: PostType) {
    this.post = {
      slug,
      title,
      date,
      coverImage,
      author,
      excerpt,
      ogImage,
      content,
    };
  }

  create(): PostType {
    return this.post;
  }
}
