import { getPost } from "../services/post.services";

type Params = {
  params: { id: string };
};

async function fetchPosts(id: string) {
  return getPost(id);
}

async function Blog({ params }: Params) {
  const { id } = params;
  const post = await fetchPosts(id);

  if (typeof post === "string") {
    return (
      <>
        <div>
          <h2>Post Not Found</h2>
        </div>
      </>
    );
  }

  return (
    <div>
      <h2>Blog {id}</h2>
    </div>
  );
}

export default Blog;
