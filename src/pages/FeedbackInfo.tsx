import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import commentsIcon from "../assets/shared/icon-comments.svg";
import MainComment from "../Components/Comments/MainComment";
import Comment from "../Types/CommentTypes";

function FeedbackInfo() {
  const location = useLocation();
  const feedbackData = location.state;

  const [upVotes, setUpVotes] = useState<number | null>(feedbackData.upvotes);

  const incrementUpVotes = () => {
    setUpVotes((prev) => (prev !== null ? prev + 1 : 1));
  };

  let repliedFound;

  console.log(feedbackData);

  if ("comments" in feedbackData) {
    console.log(false);
    // const repliedComment: number = feedbackData.comments.map((c) => {
    //   if ("replies" in c) {
    //     repliedFound = c.replies.length;
    //   } else {
    //     repliedFound = [];
    //   }
    // });
  } else {
    repliedFound = 0;
  }

  // if ("replies" in repliesLength) {
  //   console.log("found");
  // }
  // const repliesFound = repliesLength.map((e) => {
  //   if (e.replies !== undefined) {
  //     return e.replies;
  //   }
  // });
  // console.log(repliesFound);

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
            <p className="font-bold">
              {/* {feedbackData.comments.length + repliedFound} */}
            </p>
          </div>
        </div>
      </div>
      {/* comments container */}
      <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
        {/* Comments header */}
        <p className="font-bold">
          {/* <span>{feedbackData.comments.length + repliedFound}</span> Comments */}
        </p>
        {/* comment component mapping */}
        {/* {feedbackData.comments.map((comment: Comment) => {
          return <MainComment comment={comment} />;
        })} */}
      </div>
    </div>
  );
}

export default FeedbackInfo;
