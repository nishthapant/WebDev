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
          <h2 className={classes.title}>
            What is Above Grade Educational Services?
          </h2>
          <h5 className={classes.description}>
            Above Grade Educational Services L.L.C..L.C. specializes in
            academic, test preparation, and language lessons and classes for
            children and adults. Our teachers are experts in their subject
            matter, and we aid all our clients to learn a new skill or advance
            learning. We only allow a limited number of client spaces for our
            teachers. With a limited number of clients, we can focus on quality,
            not quantity, and ensure that each of our clients receives the best
            individual attention needed. We provide local services in Woodstock,
            Roswell, and Canton area in G.A.A. Online Services nationwide
            U.S.A.S.A.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
