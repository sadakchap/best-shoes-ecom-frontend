import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConfirmEmail from './components/auth/ConfirmEmail';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Home from './components/core/Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/user/verify/:token" component={ConfirmEmail} exact />
            </Switch>
        </Router>
    )
}

export default Routes
