import { Message as IMessage } from "../app/models/index";

class Message implements IMessage {
  message: string;

  constructor(message: string) {
    this.message = message || "";
  }
}

export { Message };
