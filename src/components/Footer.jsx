import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <div className="p-4 bg-[#282828] text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <img
          src="https://accredian.com/Rcimages/logo.png"
          alt="Accredian Logo"
          className="w-36"
          draggable={false}
        />
        <div className="flex flex-col items-center text-center">
          <Button
            variant="contained"
            color="primary"
            sx={{ border: "2px solid white", textTransform: "none" }}
          >
            <span className="text-xs md:text-lg">Schedule 1-on-1 Call Now</span>
          </Button>
          <span className="text-xs md:text-lg mt-2">
            Speak with our Learning Advisor
          </span>
        </div>
      </div>

      <hr className="my-4 border-gray-500" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <p className="text-xl font-semibold mb-2">Programs</p>
          <Accordion sx={{ background: "#282828", color: "white" }}>
            <AccordionSummary
              sx={{
                background: "#282828",
                color: "white",
                border: "2px solid gray",
                borderRadius: "8px",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="data-science-content"
              id="data-science-header"
            >
              <Typography>Data Science</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="space-y-2">
                <li>
                  E&ICT Academy IIT Guwahati - Executive Program in Data Science
                  and Product Management
                </li>
                <li>
                  E&ICT Academy IIT Guwahati - Executive Program in Data Science
                  and Digital Transformation
                </li>
                <li>
                  E&ICT Academy IIT Guwahati - Professional Certificate Program
                  in Data Science
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: "#282828", color: "white" }}>
            <AccordionSummary
              sx={{
                background: "#282828",
                color: "white",
                border: "2px solid gray",
                borderRadius: "8px",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="data-science-content"
              id="data-science-header"
            >
              <Typography>Product Management</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="space-y-2">
                <li>
                  IIT Kanpur - Professional Certificate Program in Product
                  Management E&ICT Academy
                </li>
                <li>
                  IIT Guwahati - Executive Program in Data Driven Product
                  Management E&ICT Academy
                </li>
                <li>
                  IIT Guwahati - Executive Program in Product Management and
                  Digital Transformation
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <p className="text-xl font-semibold mb-2">Contact Us</p>
          <ul className="space-y-2">
            <li>
              Email us:{" "}
              <a href="mailto:admissions@accredian.com" className="text-white">
                admissions@accredian.com
              </a>
            </li>
            <li>
              Data Science Admission Helpline:{" "}
              <a href="tel:+919079653292" className="text-white">
                +91 9079653292
              </a>{" "}
              (9 AM - 7 PM)
            </li>
            <li>
              Product Management Admission Helpline:{" "}
              <a href="tel:+919625811095" className="text-white">
                +91 9625811095
              </a>
            </li>
            <li>
              Enrolled Student Helpline:{" "}
              <a href="tel:+917969322507" className="text-white">
                +91 7969322507
              </a>
            </li>
            <li>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center p-4 mt-4 text-sm">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
