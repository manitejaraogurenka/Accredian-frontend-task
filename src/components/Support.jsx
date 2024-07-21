import React from "react";

const Support = () => {
  return (
    <div className="relative my-10 mx-2 lg:my-20 lg:mx-20">
      <img
        className="w-full h-auto object-cover"
        src="./Support.png"
        alt="Support"
        draggable={false}
      />
      <span className="absolute right-6 md:right-10 select-none cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-0.5 sm:p-1 md:p-2 rounded-lg text-sm md:text-lg text-blue-500 font-medium">
        Get in touch
      </span>
    </div>
  );
};

export default Support;
