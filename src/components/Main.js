import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <Link to={`/search`}>Search Reviews</Link>
      </div>
    )
  }
}

export default Main;
