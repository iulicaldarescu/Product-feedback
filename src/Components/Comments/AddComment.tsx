import { useState } from "react";
import AddFeedback from "../AddingButton";

function AddComment() {
  const [commentInput, setCommentInput] = useState<string>("");
  const [commentCharactersLeft, setCommentCharactersLeft] =
    useState<number>(250);

  const handleChange = (e: any) => {
    const remainingChars = Math.max(0, 250 - e.target.value.length);
    setCommentCharactersLeft(remainingChars);
  };

  return (
    <div className=" bg-white rounded-xl mt-3 p-5">
      {/* input of the comment */}
      <div className="flex flex-col gap-4 pb-3">
        <label htmlFor="commentInput" className=" text-black font-bold ">
          Add Comment
        </label>

        <textarea
          onChange={handleChange}
          id="commentInput"
          className="bg-[#ededed] w-full h-24 p-3 outline-none rounded-lg"
          placeholder="Type your comment here"
          maxLength={250}
        ></textarea>
      </div>

      <div className="flex justify-between items-center">
        <p>{commentCharactersLeft}</p>

        <div className="text-white bg-purple-800 rounded-lg">
          <AddFeedback>Add Comment</AddFeedback>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
