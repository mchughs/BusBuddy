import React from 'react';
import PropTypes from 'prop-types';

import SubmitReview from './SubmitReview';
import BrowseReviews from './BrowseReviews';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      whichPage: ''
    };
  }
  
  goToSubmitReview(event) {
    event.preventDefault();
    this.context.router.history.push(`/submit-review`)
  }

  goToBrowseReviews(event) {
    event.preventDefault();
    this.context.router.history.push(`/browse-reviews`)
  }

  renderSwitch(selector) {
    const mainPage = (
      <div>
        <h1>Bus Buddy</h1>
        <form onSubmit={(e) => this.setState({ whichPage: 'submitReviewPage' })}>
          <button type="submit" >Submit a Review</button>
        </form>
        <form onSubmit={(e) => this.setState({ whichPage: 'browseReviewsPage' })}>
          <button type="submit" >Browse Reviews</button>
        </form>
      </div>
    );

    const submitReviewPage = (
      <div>
        <SubmitReview/>
      </div>
    );

    const browseReviewsPage = (
      <div>
        <BrowseReviews/>
      </div>
    );

    switch(selector) {
      case 'submitReviewPage':
        return submitReviewPage;
      case 'browseReviewsPage':
        return browseReviewsPage;
      default:
        return mainPage;
    }
  }

  render() {
    return (
      <div>
        { this.renderSwitch(this.state.whichPage) }
      </div>
    );
  }
}

MainPage.contextTypes = {
   router: PropTypes.object
}

export default MainPage;
