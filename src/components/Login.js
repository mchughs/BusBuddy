import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

  render() {
    return (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <div class="container-log">

          <label for="login_field">
            Username
          </label>
          <input className="email-password" id="email" ref={(input) => { this.email = input }} type="text"/>

          <label for="password">
            Password
          </label>

          <input className="email-password" id="password" ref={(input) => { this.password = input }} type="password"/>

          <input type="submit" className="btnLog" onClick={this.handleLogin} value="Log in"
            data-disable-with="Signing in…"/>
        </div>

      </div>
    )
  }
}

export default Login;
