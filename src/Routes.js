import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Home from './components/core/Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signup" component={Signup} exact />
            </Switch>
        </Router>
    )
}

export default Routes
