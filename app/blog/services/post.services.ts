import { Message, Post } from "../../models/index";

export const getPost = (id: string): Promise<Post | Message> => {
  return fetch("")
    .then((res) => res.json())
    .then((res) => res.data())
    .catch((err: Message) => err);
};
