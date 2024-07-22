import React, { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import ReferralModal from "../components/miscellaneous/ReferralModal";

const HeroSection = () => {
  const [selected, setSelected] = useState("Refer");
  const [modalOpen, setModalOpen] = useState(false);

  const tabs = ["Refer", "Benefits", "FAQs", "Support"];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const position = element.getBoundingClientRect().top + window.pageYOffset;
      const offset = section.toLowerCase() === "refer" ? 0 : -140;

      window.scrollTo({
        top: position + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="mt-8 flex justify-around rounded-full w-[70%] md:w-1/2 bg-[#EEF5FF] text-sm md:text-2xl p-2">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => {
              setSelected(tab);
              scrollToSection(tab);
            }}
            className={`cursor-pointer relative p-2 ${
              selected === tab ? "text-[#1A73E8]" : "text-gray-600"
            }`}
          >
            {tab}
            {selected === tab && (
              <TbPointFilled
                size={15}
                className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1"
              />
            )}
          </span>
        ))}
      </nav>
      <section className="p-4 w-full md:px-28 h-fit">
        <div className="relative flex flex-col lg:flex-row items-center justify-between bg-[#EEF5FF] mt-5 overflow-hidden z-10 rounded-3xl Hero">
          <div className="flex flex-col items-start gap-4 xl:gap-6 p-10 xl:pb-20">
            <h1 className="font-Roboto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Let's Learn <br className="hidden lg:block" /> & Earn
            </h1>
            <p className="text-2xl font-medium">
              Get a chance to win <br className="hidden lg:block" /> up to{" "}
              <span className="text-[#1A73E8] font-bold text-2xl sm:text-4xl">
                Rs. 15,000
              </span>
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 bg-[#1A73E8] hover:bg-[#005bd2] rounded-md flex py-2 px-6 text-white cursor-pointer"
            >
              Refer Now
            </button>
          </div>
          <div className="flex flex-col w-full items-center justify-end">
            <img
              src="./Anniversary (7).png"
              alt="Anniversary"
              className="w-[90%] xl:w-[80%]"
              draggable={false}
            />
          </div>
          <img
            src="./Anniversary (8).png"
            alt="Decorative"
            className="absolute w-[5.5rem] top-[-1.5rem] left-[1rem] transform -scale-y-100"
            draggable={false}
          />
          <img
            src="./Anniversary (8).png"
            alt="Decorative"
            className="absolute w-[6rem] top-[-1.5rem] right-[1rem] transform rotate-180"
            draggable={false}
          />
        </div>
      </section>
      <ReferralModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HeroSection;
