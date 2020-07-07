// for frontend
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {withRouter, Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {compose} from 'recompose';

import {withFirebase} from './Firebase';
import Signup from './Signup';
import Login from './Login';
import Home from "./Home";
import * as ROUTES from './routes';
import Dashboard from './Dashboard';

const Nav = ()=>(
        <NavBar/>
);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

class NavBar extends Component{
    constructor(props){
        super(props);
    }
    state = {
        redirectSignup : false,
        redirectLogin : false,
        redirectLogout : false,
        redirectHome: true
    }

    signup = ()=>{
        this.setState({
            redirectSignup : true,
        });
    }

    login = ()=>{
        this.setState({
            redirectLogin : true,
        });
    }

    logout = ()=>{
        this.props.firebase.userLogout();
        // console.log(this.props.firebase.getCurrentUser());
        this.setState({
            redirectLogout : true,
        });
    }

    home = ()=>{
        this.setState({
            redirectHome : true
        });
    }

    redirectTo = ()=>{
        if(this.state.redirectLogin){
            this.setState({
                redirectLogin : false,
           })
            return(
            <div>
                {/* <Route path={ROUTES.LOGIN} component={Login}/> */}
                <Redirect to={ROUTES.LOGIN}/>
            </div>
            )
        }
        else if(this.state.redirectSignup){
            this.setState({
                redirectSignup : false,
           })
            return(
                <div>
                    {/* <Route path={ROUTES.SIGNUP} component={Signup}/> */}
                    <Redirect to={ROUTES.SIGNUP}/>
                </div>
            );
        }
        // else if(this.state.redirectLogout){
        //     this.state.redirectLogout = false;
        //     return(
        //         <div>
        //             {/* <Route path={ROUTES.HOME} component={Home}/> */}
        //             <Redirect to={ROUTES.HOME}/>
        //         </div>
        //     );
        // }
        else if(this.state.redirectHome){
            this.setState({
                redirectHome : false,
           })
            return(
                <div>
                    {/* <Route path='/' component={Home}/> */}
                    <Redirect to='/'/>
                </div>
            )
        }
    }

    render(){
        // const classes = useStyles();
        return(
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" className="homeBtn" onClick={this.home}>Above Grades Educational Services</Button>
                        <Button color="inherit" className="loginBtn" onClick={this.login}>Login</Button>
                        <Button color="inherit" className="signupBtn" onClick={this.signup}>SignUp</Button>
                        {/* <Button color="inherit" className="logoutBtn" onClick={this.logout}>Logout</Button> */}
                    </Toolbar>
                </AppBar>
                <Route path={ROUTES.LOGIN} component={Login}/>
                <Route path={ROUTES.SIGNUP} component={Signup}/>
                <Route path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.DASH} component={Dashboard}/>
                {this.redirectTo()}
             </Router> 
        );
    }

}

// const Navigation = compose(withRouter,withFirebase,)(NavBar);

export default Nav;
// export {Navigation};
