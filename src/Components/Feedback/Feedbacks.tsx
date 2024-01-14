import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import Feedback from "./Feedback";
import AddFeedback from "../AddingButton";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../Utilities/Fetch";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

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
  //REACT QUERRY FETCH
  const { data, isLoading } = useQuery({
    queryKey: ["myData"],
    queryFn: () => fetchData(),
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(data[0]);
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
        <div className="bg-[#ae1feb] rounded-lg">
          <Link to="/new-feedback" state={data[0]}>
            <AddFeedback>+ Add feedback</AddFeedback>
          </Link>
        </div>
      </div>
      {/* Single Feedback adding */}
      {data[0]?.productRequests.map((item: FeedbackProps) => {
        return <Feedback item={item} />;
      })}
    </>
  );
}

export default Feedbacks;
