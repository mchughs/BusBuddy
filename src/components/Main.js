import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import firebase from 'firebase';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.logUser = this.logUser.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
        this.logUser();
      } else {

      }
    });

    this.state = {
      isLoggedIn: false,
      user: ''
    };
  }

  logUser() {
    this.state.isLoggedIn ?
      firebase.auth().signOut().then(this.setState({isLoggedIn : false})):
      this.setState({isLoggedIn : true});
  }

  render() {
    const WrappedLinkSearch = () => {
      return (
        <button >
          <Link style={{display: 'block', height: '100%', color: 'white'}} className="link" to={`/search`}>Search Reviews</Link>
        </button>
      )
    }

    const WrappedLinkWrite = () => {
      return (
        <button >
          <Link style={{display: 'block', height: '100%', color: 'white'}} className="link" to={`/write`}>Write Review</Link>
        </button>
      )
    }

    const loggedIn = (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <div className="link">
          <WrappedLinkSearch/>
          <br/>
          <br/>
          <WrappedLinkWrite/>
        </div>
        <h2>Welcome to bus buddy!</h2>
        <p>Bus Buddy is an app that allows Peace Corps volunteers (PCVs) to record, and search for,
           information regarding Tanzania's bustling bus system. PCVs
           submit reviews of buses they have used, allowing other PCVs
           to pick a good bus company for future rides. In Tanzania, information
           is diseminated almost entirely through social interactions. There are
           few recorded resources to reference when it comes to getting around the country.
           Bus Buddy is helping volunteers share their transportation knowledge in a
           systematic manner.
        </p>
        <div>Logged in as {this.state.user.email}</div>
        <input type="submit" className="btnLog" onClick={this.logUser} value="Log out"
          data-disable-with="Signing in…"/>
      </div>
    );

    return (
      <div>
        {this.state.isLoggedIn ? loggedIn : <Login user={this.state.user} logUser={this.logUser}/>}
      </div>
    )
  }
}

export default Main;
