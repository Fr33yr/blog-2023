import { Post, Message } from "../models/index";

export const getPosts = (): Promise<Post[] | Message> => {
  return fetch("")
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err:Message) => err);
};
