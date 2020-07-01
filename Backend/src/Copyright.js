import React from "react";
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Above Grade Educational Services LLC
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
}

export default Copyright;