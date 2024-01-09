import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading/Loading";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import commentsIcon from "../assets/shared/icon-comments.svg";
import fetchData from "../Utilities/Fetch";

function FeedbackInfo() {
  const { id } = useParams();
  const [upVotes, setUpVotes] = useState<number | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["feedback"],
    queryFn: () => fetchData(),
  });

  useEffect(() => {
    if (!isLoading && data) {
      const filtered = data[0]?.productRequests?.find(
        (item: any) => item.id === Number(id)
      );
      setUpVotes(filtered?.upvotes || null);
    }
  }, [data, id, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const productRequests = data[0].productRequests || [];
  console.log(productRequests);

  const filtered = productRequests.filter((item: any) => {
    return item.id === Number(id);
  });

  const incrementUpVotes = () => {
    setUpVotes((prev) => (prev !== null ? prev + 1 : 1));
  };

  return (
    <div className="bg-white rounded-xl mt-7 mx-5 p-5 flex flex-col gap-2">
      <p className="font-bold">{filtered[0].title}</p>
      <p className="text-gray-500 font-semibold">{filtered[0].description}</p>
      {/* array of things */}
      <div className="flex flex-wrap gap-2">
        <p className="bg-[#e6e9f6] text-[#4661e6] font-bold py-1 px-4 rounded-xl capitalize">
          {" "}
          {filtered[0].category}
        </p>
      </div>
      {/* bottom container */}
      <div className="flex justify-between mt-3">
        {/* left side */}
        <div className=" bg-[#e6e9f6] flex py-1 px-4 rounded-xl gap-2 items-center">
          <img onClick={incrementUpVotes} className="w-3" src={arrowUp}></img>
          <p className="font-bold">{upVotes}</p>
        </div>
        {/* right side */}
        <div className="flex items-center gap-2">
          <img className="w-6" src={commentsIcon}></img>
          <p className="font-bold">{filtered[0].comments.length}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackInfo;
