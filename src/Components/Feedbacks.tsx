import arrowDown from "../assets/shared/icon-arrow-down.svg";
import Feedback from "./Feedback";
import AddFeedback from "./AddFeedback";
import { useNavigate } from "react-router-dom";
function Feedbacks() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-feedback");
  };

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

        {/* <button
          className="bg-violet-800 p-3 rounded-lg"
          onClick={() => navigate("/new-feedback")}
        >
          + Add Feedback
        </button> */}

        <AddFeedback onClickProp={handleClick}>+ Add feedback</AddFeedback>
      </div>
      {/* Single Feedback adding */}
      <Feedback />
    </>
  );
}

export default Feedbacks;
