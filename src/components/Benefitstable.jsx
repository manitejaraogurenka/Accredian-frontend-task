import React, { useState } from "react";
import { Accordion, AccordionSummary, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReferralModal from "../components/miscellaneous/ReferralModal";

const categories = [
  "Product Management",
  "Strategy & Leadership",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
  "Business Analytics",
];

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const Benefitstable = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="my-10">
      <header className="mb-4 flex items-center justify-center h-fit font-semibold text-black md:text-2xl text-sm text-center p-4">
        What Are The{" "}
        <span className="text-[#1A73E8] ml-2">Referral Benefits?</span>
      </header>
      <div className="flex items-center justify-center">
        <div className="flex gap-10">
          <div className="hidden lg:block">
            <button className="w-full text-left px-4 py-2 bg-blue-600 text-white font-semibold rounded-t-lg">
              All Programs
            </button>
            <div className="Table rounded-b-xl w-64 bg-white p-4 pt-0 border-r-2 border-gray-300">
              {categories.map((category, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        className={`transform transition-transform ${
                          true ? "rotate-180" : ""
                        }`}
                      />
                    }
                    aria-controls={`panel-${index}`}
                    id={`panel-${index}-header`}
                  >
                    <Typography>{category}</Typography>
                  </AccordionSummary>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto h-fit rounded-xl shadow-xl">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-[#1A73E8] bg-opacity-35">
                  <th className="py-2.5 px-4 border-r-2 border-gray-300 text-start">
                    Program Name
                  </th>
                  <th className="py-2.5 px-4 border-r-2 border-gray-300">
                    Referrer Bonus
                  </th>
                  <th className="py-2.5 px-4 border-r-2 border-gray-300">
                    Referee Bonus
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-r-2 border-gray-300">
                      {program.name}
                    </td>
                    <td className="py-4 px-4 border-r-2 border-gray-300">
                      {program.referrerBonus}
                    </td>
                    <td className="py-4 px-4 border-r-2 border-gray-300">
                      {program.refereeBonus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <span
        onClick={handleOpenModal}
        className="mx-auto mt-8 bg-[#1A73E8] hover:bg-[#005bd2] rounded-md flex py-2 px-6 text-white cursor-pointer w-fit"
        aria-label="Refer Now"
      >
        Refer Now
      </span>
      <ReferralModal open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Benefitstable;
