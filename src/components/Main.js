import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import firebase from 'firebase';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.logInUser = this.logInUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);

    this.state = {
      user: ''
    };
  }

  componentWillMount() {
    this.logInUser();
  }

  logInUser() {
    const localStorageRef = localStorage.getItem('user');
    localStorageRef ?
      this.setState({user:localStorageRef}) :
      console.log('Local Storage empty');
  }

  logOutUser() {
    firebase.auth().signOut();
    localStorage.removeItem('user');
    this.setState({user : ''});
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
          <Link style={{display: 'block', height: '100%', color: 'white'}} className="link" to={`/write`}>Write a Review</Link>
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
        <p>Bus Buddy is an website that allows Peace Corps volunteers (PCVs) to
           record, and search for, information regarding Tanzania's bustling bus
           system. Bus Buddy is intended for use on mobile devices. PCVs
           submit reviews of buses they have used, allowing other PCVs
           to pick a good bus company for future rides. In Tanzania, information
           is diseminated almost entirely through social interactions. There are
           few recorded resources to reference when it comes to getting around
           the country.
           Bus Buddy is helping volunteers share their transportation knowledge
           in a
           systematic manner.
        </p>
        <div>Logged in as {this.state.user ? JSON.parse(this.state.user).user.email : console.log('Not logged in')}</div>
        <input type="submit" className="btnLog" onClick={this.logOutUser} value="Log out"
          data-disable-with="Signing in…"/>
      </div>
    );

    return (
      <div>
        {(this.state.user !== '') ? loggedIn : <Login logInUser={this.logInUser}/>}
      </div>
    )
  }
}

export default Main;
