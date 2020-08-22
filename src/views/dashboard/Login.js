//for frontend
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

// for backend
import { withFirebase } from "./Firebase";
import { withRouter, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { compose } from "recompose";
import * as ROUTES from "../constants/routes";
import Dashboard from "./Dashboard";

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
const Login = () => (
  <div>
    <br></br>
    <LoginForm />
  </div>
);

const INIT_STATE = {
  email: "",
  password: "",
  error: null,
};

class LoginFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INIT_STATE };
  }

  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    console.log("inside redirect");
    if (this.state.redirect) {
      return (
        <div>
          <Route path={ROUTES.HOME} component={Dashboard} />
          <Redirect to={ROUTES.HOME} />
        </div>
      );
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .userLogin(email, password)
      .then((user) => console.log("logged in", user))
      .then(() => console.log(this.props.firebase.getCurrentUser()))
      .then(() => this.setState({ ...INIT_STATE }))
      .then(() => alert("You are logged in!"))
      .then(() => this.setRedirect())
      .catch((error) => {
        alert("Cannot login! " + error.message);
        this.setState({ error });
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const classes = useStyles;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <br></br>
          <form className={classes.form} noValidate onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
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
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={ROUTES.SIGNUP} variant="body2">
                  Don't have an account? Sign Up here
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {this.renderRedirect()}
      </Container>
    );
  }
}

const LoginForm = compose(withRouter, withFirebase)(LoginFormClass);

export default Login;
export { LoginForm };
