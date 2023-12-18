import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";
import "./Code.css";

export default function Code() {
  // State to track the currently expanded accordion
  const [expanded, setExpanded] = useState(false);

  // Function to handle accordion change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    if (isExpanded) {
      // Scroll down 60px after a short delay to allow the accordion to start expanding
      setTimeout(() => {
        window.scrollBy({ top: 60, behavior: "smooth" });
      }, 300);
    }
  };
  return (
    <div className="container code-container">
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="data-cleaning-content"
          id="data-cleaning-header"
        >
          <Typography>
            In this first Notebook, we have a look at the Dataset and remove
            obviously wrong entries
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="../public/clean_data.html"
            width="100%"
            height={650}
            title="Jupyter Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>

      {/* Second Accordion */}
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="agedistribution-content"
          id="agedistribution-header"
        >
          <Typography>Age-Distribution by Event</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum veritas dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          </Typography>
          <Typography>
            Lorem Ipsum veritas dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          </Typography>
          <Typography>
            Lorem Ipsum veritas dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          </Typography>

          <iframe
            src="../public/agedistribution_by_event.html"
            width="100%"
            height={650}
            title="Jupyter Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pace-by-event-content"
          id="pace-by-event-header"
        >
          <Typography>Pace by Event</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="../public/pace_by_event.html"
            width="100%"
            height={650}
            title="Pace by Event Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>

      {/* Records by Country Accordion */}
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="records-by-country-content"
          id="records-by-country-header"
        >
          <Typography>Records by Country</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="../public/records_by_country.html"
            width="100%"
            height={650}
            title="Records by Country Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>

      {/* Winning Times Progression Accordion */}
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="winning-times-content"
          id="winning-times-header"
        >
          <Typography>Winning Times Progression</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="../public/winning_times_progression.html"
            width="100%"
            height={650}
            title="Winning Times Progression Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
