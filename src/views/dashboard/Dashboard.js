import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import clsx from "clsx";

// Material UI imports
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";

// Material UI Icon imports
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Local file imports
import { mainListItems, secondaryListItems } from "./listItems";
import * as ROUTES from "../constants/routes";
import Copyright from "./Copyright";
import useStyles from "./Style";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import Subjects from "./pages/Subjects/Subjects";
import Instructors from "./pages/Teachers/Teachers";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./Login";
import Signup from "./Signup";

/* DASHBOARD */
export default function Dashboard() {
  // useStyles is a function in Style.js for all the styling used
  const classes = useStyles();

  // state system to open and close the 'drawer' on the left side
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  ///////////// login and signup state
  const [reSignup, redirectSignup] = React.useState(false);
  const [reLogin, redirectLogin] = React.useState(false);
  const [reLogout, redirectLogout] = React.useState(false);
  const [reHome, redirectHome] = React.useState(true);

  const signup = () => {
    redirectSignup(true);
  };

  const login = () => {
    redirectLogin(true);
  };

  const logout = () => {
    this.props.firebase.userLogout();
    // console.log(this.props.firebase.getCurrentUser());
    redirectLogout(true);
  };

  const home = () => {
    redirectHome(true);
  };

  const redirectTo = () => {
    if (this.state.redirectLogin) {
      redirectLogin(false);
      return (
        <div>
          {/* <Route path={ROUTES.LOGIN} component={Login}/> */}
          <Redirect to={ROUTES.LOGIN} />
        </div>
      );
    } else if (this.state.redirectSignup) {
      redirectSignup(false);
      return (
        <div>
          {/* <Route path={ROUTES.SIGNUP} component={Signup}/> */}
          <Redirect to={ROUTES.SIGNUP} />
        </div>
      );
    } else if (this.state.redirectHome) {
      redirectHome(false);
      return (
        <div>
          {/* <Route path='/' component={Home}/> */}
          <Redirect to="/" />
        </div>
      );
    }
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />

        {/* the bar at the top going across the screen */}
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            {/* the drawer button */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>

            {/* the title on the bar */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Above Grade Educational Services
            </Typography>

            {/* the Sign-Up button */}
            <Link to={ROUTES.SIGNUP}>
              <Button
                variant="contained"
                className={classes.buttonMargin}
                onClick={signup}
              >
                Sign Up
              </Button>
            </Link>

            {/* the Log-In button */}
            <Link to={ROUTES.LOGIN}>
              <Button
                variant="contained"
                className={classes.buttonMargin}
                onClick={login}
              >
                Log In
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

        {/* the list of button on the start */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          {/* the left arrow button to close the drawer */}
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          {/* the list of buttons imported from listItems.js */}
          <Divider />
          <br />
          <List>{mainListItems}</List>
          <br />
          <Divider />
          <br />
          <List>{secondaryListItems}</List>
        </Drawer>

        {/* the main content */}
        <div className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="false" className={classes.container}>
            {/* Write the content here */}
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <LandingPage />
              </Route>
              <Route path={ROUTES.LOGIN}>
                <Login />
              </Route>
              <Route path={ROUTES.SIGNUP}>
                <Signup />
              </Route>
              <Route path={ROUTES.INSTRUCTORS}>
                <Instructors />
              </Route>
              <Route path={ROUTES.SUBJECTS}>
                <Subjects />
              </Route>
              <Route path={ROUTES.ABOUT}>
                <About />
              </Route>
              <Route path={ROUTES.CONTACT}>
                <Contact />
              </Route>
              <Route path={ROUTES.BLOGS}>
                <Blogs />
              </Route>
            </Switch>

            {/* copyright component imported from Copyright.js */}
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </div>
      </div>
    </Router>
  );
}
