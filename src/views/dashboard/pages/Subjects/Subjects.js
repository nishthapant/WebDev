import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "../../../../components/Footer/Footer.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div className={classNames(classes.main, classes.subRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
