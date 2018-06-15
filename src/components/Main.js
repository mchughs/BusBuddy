import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <div className="link">
          <Link className="link" to={`/search`}>Search Reviews</Link>
          <br/>
          <Link className="link" to={`/write`}>Write Review</Link>
        </div>
      </div>
    )
  }
}

export default Main;
