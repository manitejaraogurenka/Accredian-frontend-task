import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PANEL_1 = "panel1";
const PANEL_2 = "panel2";

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="my-5">
      <header className="flex items-center justify-center h-fit font-semibold text-black md:text-2xl text-sm text-center p-4">
        Frequently Asked <span className="text-blue-600 ml-2">Questions</span>
      </header>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center w-[90%] gap-4">
        <nav className="flex md:flex-col gap-2 text-black">
          <button className="p-2 md:p-4 bg-white shadow-lg text-center rounded-lg">
            Eligibility
          </button>
          <button className="p-2 md:p-4 border-2 border-black rounded-xl text-nowrap text-center">
            How To Use?
          </button>
          <button className="p-2 md:p-4 border-2 border-black rounded-xl text-nowrap text-center">
            Terms & Conditions
          </button>
        </nav>
        <div className="flex-1 p-4">
          <Accordion
            expanded={expanded === PANEL_1}
            onChange={handleChange(PANEL_1)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${PANEL_1}-content`}
              id={`${PANEL_1}-header`}
            >
              <Typography className="text-blue-600 font-medium">
                Do I need to have prior Product Management and Project
                Management experience to enroll in the program?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it suitable for individuals from any field of work.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === PANEL_2}
            onChange={handleChange(PANEL_2)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${PANEL_2}-content`}
              id={`${PANEL_2}-header`}
            >
              <Typography className="text-blue-600 font-medium">
                What is the minimum system configuration required?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For optimal performance, ensure your system has at least 4 GB of
                Ensure at least 4 GB of RAM, an Intel Core i3 processor, and 5
                GB of free storage. Use Windows 10 or macOS 10.14+, and have a
                stable internet connection.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
