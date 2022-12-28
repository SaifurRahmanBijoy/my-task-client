import React from "react";

const Content = ({ content }) => {
  const { image } = content;
  console.log(image);
  if (!image) {
    return null;
  }
  return (
    <div className="">
      <img
        alt=""
        className="block object-cover object-center w-full  rounded-lg"
        src={image}
      />
    </div>
  );
};

export default Content;
