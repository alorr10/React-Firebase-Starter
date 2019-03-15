import React from 'react';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Home);
