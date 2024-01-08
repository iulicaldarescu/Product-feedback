type AddFeedbackProps = {
  onClickProp: () => void;
  children?: React.ReactNode;
};

function AddFeedback({ onClickProp, children }: AddFeedbackProps) {
  return (
    <button className="bg-violet-800 p-3 rounded-lg" onClick={onClickProp}>
      {children || "+ Add feedback"}
    </button>
  );
}

export default AddFeedback;
