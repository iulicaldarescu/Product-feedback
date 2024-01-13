export type UsersReply = {
  image: string;
  name: string;
  username: string;
};

export type Reply = {
  content: string;
  replyingTo: string;
  user: UsersReply;
};

export type ReplyItem = {
  replyItem: Reply;
};

export default Reply;
