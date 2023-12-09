import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#B57B6F",
        color: "white",
        textAlign: "center",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1" sx={{ marginRight: "16px" }}>
        Aaron Furlan
      </Typography>
      <Typography variant="subtitle1">Jonas Jacober</Typography>
    </Box>
  );
}

export default Footer;
