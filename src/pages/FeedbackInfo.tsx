import { useLocation } from "react-router-dom";
import { useState } from "react";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import commentsIcon from "../assets/shared/icon-comments.svg";
import CommentContainer from "../Components/Comments/CommentContainer";
import CommentType from "../Types/CommentTypes";

function FeedbackInfo() {
  const location = useLocation();
  const feedbackData = location.state;

  const [upVotes, setUpVotes] = useState<number | null>(feedbackData.upvotes);

  const incrementUpVotes = () => {
    setUpVotes((prev) => (prev !== null ? prev + 1 : 1));
  };

  //comments
  const comments = feedbackData.comments ?? []; //verifica null sau undefined

  const replies = comments.map((item: CommentType) => {
    return item.replies?.length ?? 0;
  });

  //replies
  const totalReplies = replies.reduce((acc: number, curr: number) => {
    return acc + curr;
  }, 0);

  return (
    <div className="p-4 mx-2 flex flex-col gap-6">
      <div className="bg-white rounded-xl mt-7 p-4 flex flex-col gap-2">
        <p className="font-bold">{feedbackData.title}</p>
        <p className="text-gray-500 font-semibold">
          {feedbackData.description}
        </p>
        {/* array of things */}
        <div className="flex flex-wrap gap-2">
          <p className="bg-[#e6e9f6] text-[#4661e6] font-bold py-1 px-4 rounded-xl capitalize">
            {" "}
            {feedbackData.category}
          </p>
        </div>
        {/* bottom container */}
        <div className="flex justify-between mt-3">
          {/* left side */}
          <div className=" bg-[#e6e9f6] flex py-1 px-4 rounded-xl gap-2 items-center">
            <img onClick={incrementUpVotes} className="w-3" src={arrowUp}></img>
            <p className="font-bold">{upVotes}</p>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2">
            <img className="w-6" src={commentsIcon}></img>

            {comments.length !== 0 && (
              <p className="font-bold">{totalReplies + comments.length}</p>
            )}
          </div>
        </div>
      </div>
      {/* comments container */}
      <div className="bg-white p-4 rounded-xl flex flex-col gap-8">
        {/* Comments header */}
        <p className="font-bold">
          <span>{comments.length}</span> Comments
        </p>
        {/* comment component mapping */}

        {feedbackData.comments?.map((comment: CommentType) => {
          return <CommentContainer comment={comment} />;
        })}
      </div>
    </div>
  );
}

export default FeedbackInfo;
