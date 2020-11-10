import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { isAuth } from '../auth/helpers/auth';

const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => (isAuth() && isAuth().role === 1) ? (<Component {...props} />) : (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />)}
        />
    )
}

export default AdminRoute
