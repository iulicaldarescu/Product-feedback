import React, { Children } from "react";

function FeedbackUpvotes({ children, incrementFunction }) {
  return (
    <p onClick={incrementFunction} className="font-bold">
      {children}
    </p>
  );
}

export default FeedbackUpvotes;
