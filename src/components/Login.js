import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => window.alert(e.message));
    promise.then(e => e, e => e);
  }

  handleSignup(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const auth = firebase.auth();

    const promise1 = auth.createUserWithEmailAndPassword(email, password);
    promise1.catch(e => window.alert(e.message));
    // log the user in
    const promise2 = auth.signInWithEmailAndPassword(email, password);
    promise2.then(e => e, e => e);
  }

  render() {
    return (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <div >
          <label for="login_field">
            Email
          </label>
          <input className="email-password" id="email" ref={(input) => { this.email = input }} type="text"/>
          <label for="password">
            Password
          </label>

          <input className="email-password" id="password" ref={(input) => { this.password = input }} type="password"/>
          <div className="container-log">
            <input type="submit" className="btnLog" onClick={this.handleLogin} value="Log in"
              data-disable-with="Signing in…"/>
            <br/>
            <input type="submit" className="btnLog" onClick={this.handleSignup} value="Sign up"
              data-disable-with="Signing in…"/>
          </div>
        </div>

      </div>
    )
  }
}

export default Login;
