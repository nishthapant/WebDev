import React from "react";
import { Link } from "react-router-dom";

// Material UI imports
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// Material UI Icon imports
import DashboardIcon from "@material-ui/icons/Dashboard";
import CourseIcon from "@material-ui/icons/MenuBook";
import TeacherIcon from "@material-ui/icons/AssignmentInd";
import InfoIcon from "@material-ui/icons/Info";
import ContactIcon from "@material-ui/icons/HeadsetMic";
import BlogIcon from "@material-ui/icons/Book";

// Local file imports
import * as ROUTES from "../constants/routes";

/* the 4 main buttons on the side */
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

/* the 2 secondary buttons on the side */
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
