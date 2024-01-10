export type UsersComment = {
  name: string;
  image: string;
  username: string;
};

export type Comment = {
  id: number;
  user: UsersComment;
  content: string;
};

export type PropComment = {
  comment: Comment;
};

export default Comment;
