import arrowDown from "../assets/shared/icon-arrow-down.svg";
import Feedback from "./Feedback";
function Feedbacks() {
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

        <button className="bg-violet-800 p-3 rounded-lg">+ Add Feedback</button>
      </div>
      {/* Single Feedback adding */}
      <Feedback />
    </>
  );
}

export default Feedbacks;
