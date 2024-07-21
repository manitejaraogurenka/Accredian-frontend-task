import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CoursesMenu = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={
        "bg-[#1A73E8] hover:bg-[#005bd2] cursor-pointer items-center gap-1 w-fit rounded-md flex py-2 px-[18px] transition-colors duration-300 text-white"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Courses menu"
    >
      Courses{" "}
      <IoIosArrowDown
        className={`transition-transform duration-300 ${
          hovered ? "rotate-180" : ""
        }`}
      />
    </span>
  );
};

export default CoursesMenu;
