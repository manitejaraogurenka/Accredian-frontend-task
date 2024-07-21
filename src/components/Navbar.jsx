import React, { useState } from "react";
import CoursesMenu from "./miscellaneous/CoursesMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="flex flex-col w-full">
      <div className="bg-[#1A73E8] bg-opacity-15 p-4 text-sm sm:text-lg">
        <div className="flex items-center justify-between w-full gap-2 md:justify-center">
          <span className="text-start md:font-semibold">
            Navigate your ideal career path with tailored expert advice
          </span>
          <a className="text-blue-600 cursor-pointer text-nowrap font-semibold">
            Contact Expert
          </a>
        </div>
      </div>

      <div className="flex justify-between w-full p-4 md:px-28 items-center">
        <div className="flex items-center gap-8">
          <a href="https://accredian.com/" className="w-[125px] h-[36.66px]">
            <img
              src="https://accredian.com/Rcimages/logo.png"
              alt="Accredian Logo"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </a>
          <div className="hidden sm:block">
            <CoursesMenu />
          </div>
        </div>

        <div className="hidden lg:flex gap-5 items-center text-nowrap font-medium">
          <a className="cursor-pointer">Refer & Earn</a>
          <a className="cursor-pointer">Resources</a>
          <a className="cursor-pointer">About Us</a>
          <a
            href="https://accredian.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-md bg-slate-300 cursor-pointer"
          >
            Login
          </a>
          <a
            href="https://trial.accredian.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A73E8] hover:bg-[#005bd2] rounded-md flex py-2 px-4 text-white cursor-pointer"
          >
            Try for free
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <div
            className="bg-[#1A73E8] hover:bg-[#005bd2] rounded-sm flex items-center gap-1 p-1 text-white cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Explore
            <IoIosArrowDown
              className={`transition-transform ease ${
                hovered ? "rotate-180" : "-rotate-90"
              }`}
            />
          </div>
          <button className="lg:hidden p-2">
            <HiMenuAlt3 size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
