import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

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

    return (
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

      </div>
    )
  }
}

export default Main;
