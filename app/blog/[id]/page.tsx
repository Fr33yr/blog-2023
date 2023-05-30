import { getPost } from "../../services/api";
import styles from "./markdown-styles.module.css";
import { Post, Message } from "@/utils";

type Params = {
  params: { id: string };
};

async function Blog({ params }: Params) {
  const response = await getPost(params.id);

  // post render
  if (response instanceof Post) {
    const { content } = response.post;

    return (
      <div>
        <h1 className="text-3xl text-center mb-16">{params.id}</h1>
        <div
          className={styles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    );
  }
  // message errors
  else if (response instanceof Message) {
    const { message } = response;
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Unkown Error</h2>
      </div>
    );
  }
}

export default Blog;
