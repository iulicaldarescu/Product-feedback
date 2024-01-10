import { PropComment } from "../../Types/CommentTypes";
import img from "../../assets/user-images/image-judah.jpg";

function MainComment({ comment }: PropComment) {
  return (
    <div className="flex bg-slate-300 gap-3">
      {/* left container */}
      <div>
        <img className="w-10 rounded-full" src={img}></img>
      </div>
      {/* right container */}
      <div className="flex w-full flex-col">
        {/* top container */}
        <div className="flex text-sm justify-between w-full bg-yellow-300">
          {/* name and user container */}
          <div className="">
            <p className="font-semibold">{comment.user.name}</p>
            <p className="text-blue-500 font-semibold">
              {comment.user.username}
            </p>
          </div>
          {/* Reply container */}
          <div className="flex justify-center items-center">
            <p className="text-blue-500 font-semibold">Reply</p>
          </div>
        </div>
        {/* bottom container */}
        <div>
          {/* Comment text */}
          {/* text exceeded.... tailwind class => truncate w-full */}
          <p className="text-sm">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}

export default MainComment;
