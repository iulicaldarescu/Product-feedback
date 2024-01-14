import styles from "../styles/NewFeedback.module.css";
import AddFeedback from "../Components/AddingButton";
import { useNavigate, useLocation } from "react-router-dom";
import supabase from "../configSupa/supabaseConfiguration";
import { TABLE_NAME } from "../Utilities/CommonVariables";

function NewFeedback() {
  const navigate = useNavigate();
  const { state: dataObjectSupabaseRow } = useLocation();
  // object structure to be update
  let mainFeedbackObject = {
    id: 0,
    title: "",
    status: "",
    upvotes: 0,
    category: "",
    comments: [],
    description: "",
  };

  //inputs value get function update object with input values
  const handleChange = (e: any) => {
    mainFeedbackObject = {
      ...mainFeedbackObject,
      [e.target.name]: e.target.value,
    };
  };

  // add feedback button logic, set unic id on click, for above created and updated object
  const addFeedbackFunction = async () => {
    mainFeedbackObject = {
      ...mainFeedbackObject,
      id: dataObjectSupabaseRow.productRequests.length + 1,
    };

    // build prototype array
    const newArr = [
      ...dataObjectSupabaseRow.productRequests,
      mainFeedbackObject,
    ];

    // update array from supabase overwriting the prototype array in productRequests row object property
    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ productRequests: newArr })
      .eq("id", dataObjectSupabaseRow.id);
  };

  return (
    <div className="flex flex-col mx-4 p-4 mb-20 bg-white gap-4 mt-8">
      {/* h1 title of the component */}
      <div>
        <h1 className="font-bold">Create New Feedback</h1>
      </div>

      {/* feedback title */}
      <div className="flex flex-col">
        <p className="font-semibold">Feedback Title</p>
        <label htmlFor="feedback-title" className="pb-2">
          Add a short description headline
        </label>
        <input
          onChange={handleChange}
          id="feedback-title"
          name="title"
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
          onChange={handleChange}
          id="feedback-category"
          name="category"
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
        <label htmlFor="description-details">
          Include any specific comments on what should be improved, added, etc
        </label>
        <textarea
          onChange={handleChange}
          id="description-details"
          name="description"
          className="bg-[#ededed] h-28 rounded-lg mt-2 outline-none p-4"
        ></textarea>
      </div>

      {/* add feeback and cancel buttons container */}
      <div className="flex flex-col gap-3 text-white">
        <div className="bg-[#ae1feb] flex justify-center rounded-lg">
          <AddFeedback onClickProp={addFeedbackFunction}>
            Add feedback
          </AddFeedback>
        </div>
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
