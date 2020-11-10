import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { isAuth } from '../auth/helpers/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => (isAuth()) ? (<Component {...props} />) : (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />)}
        />
    )
}

export default PrivateRoute