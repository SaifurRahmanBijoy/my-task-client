import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <progress className="progress w-3/5 flex justify-center items-center"></progress>
    </div>
  );
};

export default Loading;
