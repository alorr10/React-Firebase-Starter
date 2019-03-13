import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Route
        {...rest}
        render={props =>
          authUser ? (
            <Component {...props} />
          ) : (
            <Redirect to={ROUTES.SIGN_IN} />
          )
        }
      />
    )}
  </AuthUserContext.Consumer>
);

export default PrivateRoute;
