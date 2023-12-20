import LoadingSkeleton from "@/app/_conponents/LoadingSkeleton";

const SingleRecipeLoading = () => {
  return (
    <div className="container flex gap-7 flex-col lg:flex-row mt-10">
      <div className="flex-1">
        <div className="flex gap-4 flex-wrap mt-3">
          {[...Array(4)].map((_, index) => (
            <LoadingSkeleton key={index} className="h-6 w-16 rounded-lg" />
          ))}
        </div>
        <LoadingSkeleton className="h-10 rounded-full mt-5 max-w-xl" />

        <div className="flex gap-4 flex-wrap mt-4">
          <LoadingSkeleton className="h-5 w-24 rounded-lg" />
          <LoadingSkeleton className="h-5 w-20 rounded-lg" />
        </div>
        <LoadingSkeleton className="h-4 w-24 rounded-lg mt-4" />
        <LoadingSkeleton className="aspect-video rounded-lg mt-7 max-h-[400px] w-full" />
        <div className="flex gap-6 flex-wrap items-center mt-6">
          {[...Array(3)].map((_, index) => (
            <div className="flex gap-4 items-center" key={index}>
              <LoadingSkeleton className="rounded-full w-12 h-12" />
              <LoadingSkeleton className="h-5 w-24 rounded-lg" />
            </div>
          ))}
        </div>

        <LoadingSkeleton className="rounded-full w-full h-5 mt-6" />
        <LoadingSkeleton className="rounded-full w-full h-5 mt-3" />
        <LoadingSkeleton className="rounded-full w-4/5 h-5 mt-3" />
        <LoadingSkeleton className="rounded-full w-full max-w-[200px] h-6 mt-7" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[150px] mt-6" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[150px] mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[150px] mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[150px] mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[150px] mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[150px] mt-3" />
        {/* == */}
        <LoadingSkeleton className="rounded-full w-full h-6 max-w-[200px] mt-6" />
        <LoadingSkeleton className="rounded-full w-full h-5 mt-6" />
        <LoadingSkeleton className="rounded-full w-full h-5 mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 mt-3" />
        <LoadingSkeleton className="rounded-full w-full h-5 max-w-[300px] mt-3" />
      </div>
      <div className="w-full lg:max-w-[300px]">
        <LoadingSkeleton className="rounded-lg h-7 max-w-[150px] mt-3" />
        <div className="flex gap-4 mt-5 flex-col">
          {[...Array(3)].map((_, index) => (
            <div className="flex gap-4" key={index}>
              <LoadingSkeleton
                key={index}
                className="rounded-lg w-1/3 min-w-[120px]"
              />
              <div className="w-2/3">
                <LoadingSkeleton
                  key={index}
                  className="w-full h-4 rounded-lg"
                />
                <LoadingSkeleton
                  key={index}
                  className="w-full h-3 max-w-[80px] rounded-lg mt-3"
                />
                <LoadingSkeleton
                  key={index}
                  className="w-full h-3 rounded-lg mt-3"
                />
                <LoadingSkeleton
                  key={index}
                  className="w-full h-3 rounded-lg mt-2"
                />
              </div>
            </div>
          ))}
        </div>
        <LoadingSkeleton className="rounded-lg h-7 max-w-[150px] mt-8" />
        <ul className="flex-col gap-3 flex mt-4 sticky top-5 right-0">
          {[...Array(7)].map((_, index) => (
            <li key={index}>
              <LoadingSkeleton className="h-8 rounded-full" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleRecipeLoading;
