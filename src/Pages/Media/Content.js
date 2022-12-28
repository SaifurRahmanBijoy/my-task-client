import React from "react";

const Content = ({ content }) => {
  const { image } = content;
  console.log(image);
  if (!image) {
    return null;
  }
  return (
    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img
              alt=""
              className="block object-cover object-center w-full h-full rounded-lg"
              src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
