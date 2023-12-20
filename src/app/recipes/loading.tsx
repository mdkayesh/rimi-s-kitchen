import React from "react";
import LoadingSkeleton from "../_conponents/LoadingSkeleton";

const RecipesLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(10)].map((_, index) => (
        <LoadingSkeleton key={index} className="aspect-[2/3] shadow-lg" />
      ))}
    </div>
  );
};

export default RecipesLoading;
