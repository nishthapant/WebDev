import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {compose} from "recompose";
import {withFirebase} from "./Firebase";
import {withRouter, Redirect} from "react-router-dom";
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
import * as ROUTES from "./routes";
import Copyright from "./Copyright";
import useStyles from "./Style";

// Pages
import Home from "./Home";
import Subjects from "./Subjects";
import Instructors from "./Instructors";
import Blogs from "./Blogs";
import About from "./About";
import Contact from "./Contact";

const Dashboard = ()=>(
    <div>
        <Dash />
    </div>
);

/* DASHBOARD */
class DashboardClass extends Component{
    constructor(props){
        super(props)
        // [this.open, this.setOpen] = React.useState(true);
        this.state = {
            open: false
        }
    }
    handleDrawerOpen = () => {
        this.setState({
            open:true
        })
    };

    handleDrawerClose = () => {
        this.setState({
            open:false
        })
    };

    render(){
        const classes = useStyles();
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return(
             <Router>
                 <div className={classes.root}>
                    <CssBaseline />
                     {/* the bar at the top going across the screen */}
                    <AppBar
                        position="absolute"
                        className={clsx(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                   <Toolbar className={classes.toolbar}>
                     {/* the drawer button */}
                     <IconButton
                       edge="start"
                       color="inherit"
                       aria-label="open drawer"
                       onClick={this.handleDrawerOpen}
                       className={clsx(
                         classes.menuButton,
                         this.state.open && classes.menuButtonHidden
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
                     <Button variant="contained" className={classes.buttonMargin}>
                       Sign Up
                     </Button>
         
                     {/* the Log-In button */}
                     <Button variant="contained" className={classes.buttonMargin}>
                       Log In
                     </Button>
                   </Toolbar>
                 </AppBar>
         
                 {/* the list of button on the start */}
                 <Drawer
                   variant="permanent"
                   classes={{
                     paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                   }}
                   open={this.state.open}
                 >
                   {/* the left arrow button to close the drawer */}
                   <div className={classes.toolbarIcon}>
                     <IconButton onClick={this.handleDrawerClose}>
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
                   <Container maxWidth="lg" className={classes.container}>
                     {/* Write the content here */}
                     <Switch>
                       <Route exact path={ROUTES.HOME}>
                         <Home />
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
        )
    }
}

const Dash = compose(withRouter,withFirebase,)(DashboardClass);

export default Dashboard;
export {Dash};

// export default
// export default function Dashboard() {
//   // useStyles is a function in Style.js for all the styling used
//   const classes = useStyles();

//   // state system to open and close the 'drawer' on the left side
//   const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const this.handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   return (
//       <div>
//           Dashboard
//       </div>
    // <Router>
    //   <div className={classes.root}>
    //     <CssBaseline />

    //     {/* the bar at the top going across the screen */}
    //     <AppBar
    //       position="absolute"
    //       className={clsx(classes.appBar, open && classes.appBarShift)}
    //     >
    //       <Toolbar className={classes.toolbar}>
    //         {/* the drawer button */}
    //         <IconButton
    //           edge="start"
    //           color="inherit"
    //           aria-label="open drawer"
    //           onClick={handleDrawerOpen}
    //           className={clsx(
    //             classes.menuButton,
    //             open && classes.menuButtonHidden
    //           )}
    //         >
    //           <MenuIcon />
    //         </IconButton>

    //         {/* the title on the bar */}
    //         <Typography
    //           component="h1"
    //           variant="h6"
    //           color="inherit"
    //           noWrap
    //           className={classes.title}
    //         >
    //           Above Grade Educational Services
    //         </Typography>

    //         {/* the Sign-Up button */}
    //         <Button variant="contained" className={classes.buttonMargin}>
    //           Sign Up
    //         </Button>

    //         {/* the Log-In button */}
    //         <Button variant="contained" className={classes.buttonMargin}>
    //           Log In
    //         </Button>
    //       </Toolbar>
    //     </AppBar>

    //     {/* the list of button on the start */}
    //     <Drawer
    //       variant="permanent"
    //       classes={{
    //         paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
    //       }}
    //       open={open}
    //     >
    //       {/* the left arrow button to close the drawer */}
    //       <div className={classes.toolbarIcon}>
    //         <IconButton onClick={this.handleDrawerClose}>
    //           <ChevronLeftIcon />
    //         </IconButton>
    //       </div>

    //       {/* the list of buttons imported from listItems.js */}
    //       <Divider />
    //       <br />
    //       <List>{mainListItems}</List>
    //       <br />
    //       <Divider />
    //       <br />
    //       <List>{secondaryListItems}</List>
    //     </Drawer>

    //     {/* the main content */}
    //     <div className={classes.content}>
    //       <div className={classes.appBarSpacer} />
    //       <Container maxWidth="lg" className={classes.container}>
    //         {/* Write the content here */}
    //         <Switch>
    //           <Route exact path={ROUTES.HOME}>
    //             <Home />
    //           </Route>
    //           <Route path={ROUTES.INSTRUCTORS}>
    //             <Instructors />
    //           </Route>
    //           <Route path={ROUTES.SUBJECTS}>
    //             <Subjects />
    //           </Route>
    //           <Route path={ROUTES.ABOUT}>
    //             <About />
    //           </Route>
    //           <Route path={ROUTES.CONTACT}>
    //             <Contact />
    //           </Route>
    //           <Route path={ROUTES.BLOGS}>
    //             <Blogs />
    //           </Route>
    //         </Switch>

    //         {/* copyright component imported from Copyright.js */}
    //         <Box pt={4}>
    //           <Copyright />
    //         </Box>
    //       </Container>
    //     </div>
    //   </div>
    // </Router>
//   );
// }