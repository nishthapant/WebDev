import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";

import styles from "../../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our History</h2>
          <h5 className={classes.description}>
            We were established in 2009.
            <br />
            <br />
            Since opening for business back in 2009, Above Grade Educational
            Services is associated with high quality and professionalism. That's
            primarily because of our concerted effort to deepen the connections
            we have within the community locally, nationally, and
            internationally. We continuously improve the personalized services
            we provide.
            <br />
            <br />
            All team members have graduated with either undergrad, graduate
            degrees, or advanced certifications. As a team, we have over 50
            years of experience in teaching and tutoring. All team members have
            excellent rapport with our clients. We are professional, prompt, and
            reliable. Our reviews all over the web speak to that testimony.
            Please contact us so we can help you achieve success!
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
