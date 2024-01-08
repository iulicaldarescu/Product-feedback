import styles from "../styles/NewFeedback.module.css";
import AddFeedback from "../Components/AddingButton";
import { useNavigate } from "react-router-dom";

function NewFeedback() {
  const navigate = useNavigate();

  // add feedback button logic
  const handleClick = () => {
    console.log("FEEDBACK POSTED");
  };

  return (
    <div className="flex flex-col mx-4 p-4 mb-20 bg-white gap-4 mt-8">
      <div>
        <p className="font-bold">Create New Feedback</p>
      </div>

      {/* feedback title */}
      <div className="flex flex-col">
        <p className="font-semibold">Feedback Title</p>
        <label htmlFor="feedback-title" className="pb-2">
          Add a short description headline
        </label>
        <input
          id="feedback-title"
          name="feedback-title"
          type="text"
          className="bg-[#ededed] rounded-lg p-2 w-full outline-none"
        ></input>
      </div>

      {/* feedback category */}
      <div className="flex flex-col gap-2">
        <p className=" font-semibold">Category</p>
        <label htmlFor="feedback-category">
          Choose a category for your feedback
        </label>
        <select
          id="feedback-category"
          name="feedback-category"
          className={`bg-[#ededed] rounded-lg p-2 w-full outline-none`}
        >
          <option value="default">Please choose an option</option>
          <option value="Feature">Feature</option>
          <option value={`Enhancement`}>Enhancement</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Bug">Bug</option>
        </select>
      </div>

      {/* feedback Detail */}
      <div className="flex flex-col pb-10 mt-3">
        <p className="font-semibold">Feedback Detail</p>
        <label htmlFor="feedback-details">
          Include any specific comments on what should be improved, added, etc
        </label>
        <textarea
          id="feedback-details"
          name="feedback-details"
          className="bg-[#ededed] h-28 rounded-lg mt-2 outline-none p-4"
        ></textarea>
      </div>

      <div className="flex flex-col gap-3 text-white">
        <AddFeedback onClickProp={handleClick}>Add feedback</AddFeedback>
        <button
          className="bg-blue-950 p-3 rounded-lg"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewFeedback;
