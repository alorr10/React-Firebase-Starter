import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';

import * as ROUTES from '../../constants/routes';
const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }
  onSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await this.props.firebase.doSignInWithEmailAndPassword(
        email,
        password,
      );
      this.setState({ email: '', password: '', error: null });
      this.props.history.push(ROUTES.HOME);
    } catch (error) {
      this.setState({ error });
    }
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const condition = authUser => !authUser;

const SignInForm = compose(
  withRouter,
  withFirebase,
  // withAuthorization(condition),
)(SignInFormBase);

export default SignInPage;
export { SignInForm };
