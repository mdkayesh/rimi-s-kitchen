import React from "react";

const LoadingSkeleton = ({ className }: { className: string }) => {
  return (
    <div className={`loader-container ${className}`}>
      <div className="inner-loader" />
    </div>
  );
};

export default LoadingSkeleton;
