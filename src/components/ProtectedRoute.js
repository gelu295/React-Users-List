import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, path, ...rest}) => {
    console.log(isAuth)
    return (
        <Route path={path} {...rest} render={props => {
            return isAuth ? <Component {...props}/> : <Redirect to="/"/>
            }}>

        </Route>
    )
}

export default ProtectedRoute;