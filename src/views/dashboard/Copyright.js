import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Above Grade Educational Services LLC.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
