import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Code() {
  return (
    <div className="container">
      <Accordion sx={{ width: "100%" }}>
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
            src="clean_data.html"
            width="100%"
            height="600px"
            title="Jupyter Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>

      {/* Second Accordion as Placeholder */}
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="agedistribution-content"
          id="agedistribution-header"
        >
          <Typography>
            In this Notebook we create the plot for the agedistribution by event
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="agedistribution_by_event.html"
            width="100%"
            height="600px"
            title="Jupyter Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
