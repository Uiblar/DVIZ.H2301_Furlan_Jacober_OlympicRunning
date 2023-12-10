import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#B57B6F", width: "100%", height: "64px" }}
    >
      <Toolbar style={{ height: "100%" }}>
        <Typography variant="h6" style={{ flexGrow: 1, fontSize: "1.25rem" }}>
          Visualizing Running Data
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/datastory"
          style={{ fontSize: "1rem" }}
        >
          DataStory
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/code"
          style={{ fontSize: "1rem" }}
        >
          Code
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
