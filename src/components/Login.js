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
    promise.then(
      e => {
        localStorage.setItem('user', JSON.stringify(e));
        this.props.logInUser();
      })
    promise.catch(
      e => window.alert(e.message)
    );
  }

  handleSignup(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(e => window.alert('Thanks for signing up! Please click the Log in button!'))
    promise.catch(e => window.alert(e.message));
  }

  render() {
    return (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <div >
          <label htmlFor="login_field">
            Email
          </label>
          <input className="email-password" id="email" ref={(input) => { this.email = input }} type="text"/>
          <label htmlFor="password">
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
