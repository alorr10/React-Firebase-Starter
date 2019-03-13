import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import styles from './Navigation.module.css';
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <ul>
    <li className={styles.listItem}>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className={styles.listItem}>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li className={styles.listItem}>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li className={styles.listItem}>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li className={styles.listItem}>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
export default Navigation;
