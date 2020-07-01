// import {withRouter} from 'react-router-dom';
// import {compose} from 'recompose';

// for backend
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';

//for front end
import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Home = ()=>(
  <div>
      <HomePage />
  </div>
        
);


class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){

        const classes = useStyles;

        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <div className={classes.paper}>
                    <br></br>
                    <Typography component="h4" variant="h5" alignItems='center'>
                        Welcome to
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Above Grade Educational Services
                    </Typography>
                    <br></br>
                    </div>
                <Box mt={5}>
                </Box>
          </Container>
          
        );
    }

}

export default Home;


//---------------------------------------------


