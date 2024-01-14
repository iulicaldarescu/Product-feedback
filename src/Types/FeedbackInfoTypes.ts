import CommentType from "./CommentTypes";

export type updateProductRequest = {
  rowId: any;
  productRequestId: number;
  newTitle: string;
  newDescription: string | number;
  newCategory: string;
};

export type updateDataIteration = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: CommentType[];
};

export default updateDataIteration;
