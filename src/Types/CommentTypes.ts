import RepliesTypes from "../Types/ReplyTypes";

export type UsersComment = {
  name: string;
  image: string;
  username: string;
};

export type CommentType = {
  id: number;
  user: UsersComment;
  content: string;
  replies?: RepliesTypes[];
};

export type PropComment = {
  comment: CommentType;
};

export default CommentType;
