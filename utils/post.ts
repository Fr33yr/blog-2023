import { PostType } from "@/app/models";

class Post implements PostType {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  excerpt: string;
  ogImageUrl: string;
  content: string;

  constructor(props: PostType) {
    this.slug = props.slug || "";
    this.title = props.title || "";
    this.date = props.date || "";
    this.coverImage = props.coverImage || "";
    this.author = props.author || "";
    this.excerpt = props.excerpt || "";
    this.ogImageUrl = props.ogImageUrl || "";
    this.content = props.content || "";
  }
}
export { Post };
