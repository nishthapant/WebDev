//for frontend
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//for backend
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';

// frontend
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
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
        <h1>SignUp</h1>
            <SignUpForm />
    </div>
);

const INIT_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
};

class SignUpFormBase extends Component{
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
        return <Redirect to={ROUTES.HOME} />
        // if(this.state.redirect)
        //   return <Redirect to={ROUTES.HOME} />
    }

    onSubmit = event =>{
        event.preventDefault();
        const{username, email, password}=this.state;
        console.log(email);
        this.props.firebase
        .userSignUp(email, password)
        .then(()=>alert('redirecting...'))
        .then(()=>{
            return <Redirect to='/' />
        })
        // this.setState({...INIT_STATE});
        // console.log("redirecting...");
        // })
        .catch(error => {
            this.setState({error});
        });

        
    }

    onChange = event =>{
        this.setState({[event.target.name]:event.target.value});
    };

    

    render(){

        const{
            username,
            email,
            password,
            error,
        }=this.state;

        const isInvalid =
            password === '' ||
            email === '' ||
            username === '';
        
        const classes = useStyles;

        
        return(
            <Container component="main" maxWidth="xs">
            {/* {this.renderRedirect()} */}
            <CssBaseline />
            <div className={classes.paper}>
              {/* <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <br></br>
              <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                //onClick={this.renderRedirect()}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="https://www.youtube.com/" variant="body2">
                      Already have an account? Sign in
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

// const SignUpLink = ()=>(
//     <p>
//         Dont't have account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//     </p>
// );

const SignUpForm = compose(withRouter,withFirebase,)(SignUpFormBase);

export default SignUp;
export {SignUpForm};
