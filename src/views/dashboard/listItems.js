import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import CourseIcon from "@material-ui/icons/MenuBook";
import TeacherIcon from "@material-ui/icons/AssignmentInd";
import InfoIcon from "@material-ui/icons/Info";
import ContactIcon from "@material-ui/icons/HeadsetMic";
import BlogIcon from "@material-ui/icons/Book";

export const mainListItems = (
  <div>
    <Link to={ROUTES.HOME} style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link
      to={ROUTES.SUBJECTS}
      style={{ color: "#000", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <CourseIcon />
        </ListItemIcon>
        <ListItemText primary="Subjects" />
      </ListItem>
    </Link>

    <Link
      to={ROUTES.INSTRUCTORS}
      style={{ color: "#000", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <TeacherIcon />
        </ListItemIcon>
        <ListItemText primary="Instructors" />
      </ListItem>
    </Link>

    <Link to={ROUTES.BLOGS} style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <BlogIcon />
        </ListItemIcon>
        <ListItemText primary="Blogs" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link to={ROUTES.ABOUT} style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>

    <Link to={ROUTES.CONTACT} style={{ color: "#000", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ContactIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </Link>
  </div>
);
