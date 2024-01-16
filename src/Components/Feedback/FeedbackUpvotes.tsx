import React, { Children } from "react";

function FeedbackUpvotes({ children, incrementFunction, flag }) {
  return (
    <>
      <button onClick={incrementFunction} disabled={flag} className="font-bold">
        {children}
      </button>
    </>
  );
}

export default FeedbackUpvotes;
