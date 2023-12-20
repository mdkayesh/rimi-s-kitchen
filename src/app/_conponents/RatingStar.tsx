import React from "react";
import { MdStar } from "react-icons/md";

const RatingStar = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 items-center">
      {[...Array(5)].map((_, index) => (
        <p key={index} className={index <= rating ? "text-yellow-500" : ""}>
          <MdStar />
        </p>
      ))}
    </div>
  );
};

export default RatingStar;
