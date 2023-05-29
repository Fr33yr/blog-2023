import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Message as IMessage, PostType} from "../models";
import { markdownToHtml } from "./posts.services";
import {Post, Message} from '../../utils/index'

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts as unknown as PostType[];
}

export const getPost = async (id: string): Promise<PostType | IMessage> => {
  const post = getPostBySlug(id, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  if (post.title && post.date && post.slug && post.author && post.coverImage && content) {
    // Create a Post instance
    return new Post({
      slug: post.slug,
      title: post.title,
      date: post.date,
      coverImage: post.coverImage,
      author: { name: 'post.author', picture: "" },
      excerpt: post.excerpt || '',
      ogImage: { url: "" },
      content: content,
    }) as unknown as PostType;
  } else {
    // Create a Message instance
    return new Message('Invalid post data');
  }
};
