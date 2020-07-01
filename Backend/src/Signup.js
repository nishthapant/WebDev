//for frontend
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// for backend
import {withFirebase} from './Firebase';
import {withRouter, Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {compose} from 'recompose';
import * as ROUTES from './routes.js';
import Login from './Login';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to={ROUTES.HOME}>
          Above Grade Educational Services LLC
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
}

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
  

// backend
const SignUp = ()=>(
    <div>
        <br></br>
        <SignUpForm />
    </div>
);

const INIT_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: null,
};

class SignUpFormClass extends Component{
    constructor(props){
        super(props);
        this.state = {...INIT_STATE};
    }

    state = {
        redirect:false
    }

    setRedirect = ()=> {
        this.setState({
            redirect:true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect){
          return(
            <div>
              <Route path={ROUTES.LOGIN} component={Login}/>
              <Redirect to={ROUTES.LOGIN}/>            
          </div>
          )
        }
    }

    onSubmit = event =>{
      event.preventDefault();
      const{firstName, lastName, email, password}=this.state;
      this.props.firebase
      .userSignUp(email, password)
      .then(()=>this.setState({...INIT_STATE}))
      .then(()=>alert('We signed you up!'))
      .then(()=>this.setRedirect())
      .catch(error => {
        alert("Cannot sign up");
        this.setState({error});
      });

      
  }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value});
    };

    

    render(){

        const{
            username,
            email,
            password,
            error,
        }=this.state;

        // const isInvalid =
        //     password === '' ||
        //     email === '' ||
        //     username === '';
        
        const classes = useStyles;

        
        return(
            <Container component="main" maxWidth="xs">
            {this.renderRedirect()}
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <br></br>
              <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={this.handleChange}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to={ROUTES.LOGIN} variant="body2">
                      Already have an account? Sign in here
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        );
    }

}

const SignUpForm = compose(withRouter,withFirebase,)(SignUpFormClass);

export default SignUp;
export {SignUpForm};
