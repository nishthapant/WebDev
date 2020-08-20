import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "../../../../components/Footer/Footer.js";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import Button from "../../../../components/CustomButtons/Button.js";
import Parallax from "../../../../components/Parallax/Parallax.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter image={require("../../../../assets/img/school.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Above Grades connects you to the best Teachers and subjects
                you’ll love to learn.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="http://localhost:3000/instructors"
                //target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Know the teachers
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
