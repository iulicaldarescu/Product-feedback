import { ReplyItem } from "../../Types/ReplyTypes";
import img from "../../assets/user-images/image-judah.jpg";

// This component has the same design as CommentContainer component
function ReplyContainer({ replyItem }: ReplyItem) {
  return (
    <div className="flex gap-3 ml-7 pl-2 border-l-[1px] border-gray-400 mt-4">
      {/* left container */}
      <div>
        <img className="w-10 rounded-full" src={img}></img>
      </div>
      {/* right container */}
      <div className="flex w-full flex-col">
        {/* top container */}
        <div className="flex text-sm justify-between w-full">
          {/* name and user nickname container */}
          <div className="">
            <p className="font-semibold">{replyItem.user.name}</p>
            <p className="text-blue-500 font-semibold">
              {replyItem.user.username}
            </p>
          </div>
          {/* Reply button container */}
          <div className="flex justify-center items-center">
            <p className="text-blue-500 font-semibold">Reply</p>
          </div>
        </div>
        {/* bottom container */}
        <div className="mt-3">
          {/* Comment text */}
          {/* text exceeded.... tailwind class => truncate w-full */}
          <p className="text-sm text-gray-500">
            <span className="text-[#b532ec] font-bold">
              @{replyItem.replyingTo}{" "}
            </span>
            {replyItem.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReplyContainer;
