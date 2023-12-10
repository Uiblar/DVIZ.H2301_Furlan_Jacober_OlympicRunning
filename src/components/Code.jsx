import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Code() {
  return (
    <div className="container">
      {/* First Accordion for Jupyter Notebook 100% width*/}
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            In this first Notebook, we have a look at the Dataset and remove
            obviously wrong entries
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Here you would need to link to a rendered version of your notebook */}
          <iframe
            src="clean_data.html"
            width="100%"
            height="600px"
            title="Jupyter Notebook"
          ></iframe>
        </AccordionDetails>
      </Accordion>

      {/* Second Accordion as Placeholder */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Placeholder Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a placeholder for additional content.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
