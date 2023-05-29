import { PostLink } from "../components/index";
import { getAllPosts } from "./services/api";

export default function Home() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return (
    <>
      <div className="flex flex-col gap-8">
        {posts &&
          posts.map((post) => (
            <PostLink
              id={post.slug}
              description={post.excerpt}
              title={post.title}
              date={post.date}
            />
          ))}
      </div>
    </>
  );
}
