import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import Feedback from "./Feedback";
import AddFeedback from "../AddingButton";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../Utilities/Fetch";
import Loading from "../Loading/Loading";
import { useState } from "react";

export type FeedbackProps = {
  category: string;
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number;
  comments: any;
};

function Feedbacks() {
  ///////////////////
  const [commentInput, setCommentInput] = useState<string>("");
  const [commentCharactersLeft, setCommentCharactersLeft] =
    useState<number>(250);

  const handleChange = (e: any) => {
    const remainingChars = Math.max(0, 250 - e.target.value.length);
    setCommentCharactersLeft(remainingChars);
  };

  ///////////////
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-feedback");
  };

  //REACT QUERRY FETCH
  const { data, isLoading } = useQuery({
    queryKey: ["myData"],
    queryFn: () => fetchData(),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex  justify-between items-center bg-blue-950 text-white p-5">
        <div>
          <label htmlFor="votes">Sort by: </label>
          <select id="votes" name="votes" className="bg-blue-950">
            <option value="most-upvotes">
              Most Upvotes
              <img src={arrowDown} alt="arrow-down"></img>
            </option>
          </select>
        </div>

        <AddFeedback onClickProp={handleClick}>+ Add feedback</AddFeedback>
      </div>
      {/* Single Feedback adding */}

      {data[0]?.productRequests.map((item: FeedbackProps) => {
        return <Feedback item={item} />;
      })}

      <div className=" bg-white rounded-xl mt-7 mx-5 p-5">
        {/* input of the comment */}
        <div className="flex flex-col gap-4 pb-3">
          <label htmlFor="commentInput" className=" text-black font-bold ">
            Add Comment
          </label>

          <textarea
            onChange={handleChange}
            id="commentInput"
            className="bg-[#ededed] w-full h-24 p-3"
            placeholder="Type your comment here"
            maxLength={250}
          ></textarea>
        </div>

        <div className="flex justify-between">
          <p>{commentCharactersLeft}</p>
          <button>Adding button</button>
        </div>
      </div>
    </>
  );
}

export default Feedbacks;
