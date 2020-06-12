import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Home from '../Home';
import PasswordForget from '../PasswordForget';
// import PasswordChange from '../PasswordChange';
import Account from '../Account';

import * as ROUTES from '../../constants/routes';


const App = ()=>(
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route path={ROUTES.SIGN_IN} component={SignIn}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget}/>
            {/* <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChange}/> */}
            <Route path={ROUTES.ACCOUNT} component={Account}/>

        </div>
    </Router>
);

export default App;