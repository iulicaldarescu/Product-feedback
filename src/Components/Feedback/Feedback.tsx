import { useState } from "react";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import commentsIcon from "../../assets/shared/icon-comments.svg";
import { FeedbackProps } from "../Feedback/Feedbacks";
import { Link } from "react-router-dom";

// custom TYPESCRIPT !!!!!!!!
export type Props = {
  item: FeedbackProps;
};

function Feedback({ item }: Props) {
  const [upVotes, setUpVotes] = useState<number>(item.upvotes);

  let commentLength = item.comments ?? [];

  console.log(item.id);

  return (
    <Link to={`/feedback/${item.id}`}>
      <div className="bg-white rounded-xl mt-7 mx-5 p-5 flex flex-col gap-2">
        <p className="font-bold">{item.title}</p>
        <p className="text-gray-500 font-semibold">{item.description}</p>
        {/* array of things */}
        <div className="flex flex-wrap gap-2">
          <p className="bg-[#e6e9f6] text-[#4661e6] font-bold py-1 px-4 rounded-xl capitalize">
            {item.category}
          </p>
        </div>
        {/* bottom container */}
        <div className="flex justify-between mt-3">
          {/* left side */}
          <div className=" bg-[#e6e9f6] flex py-1 px-4 rounded-xl gap-2 items-center">
            <img
              onClick={() => setUpVotes((prev) => prev + 1)}
              className="w-3"
              src={arrowUp}
            ></img>
            <p className="font-bold">{upVotes}</p>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2">
            <img className="w-6" src={commentsIcon}></img>
            <p className="font-bold">{commentLength.length}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Feedback;
