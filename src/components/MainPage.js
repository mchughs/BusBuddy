import React from 'react';
import PropTypes from 'prop-types';

class MainPage extends React.Component {

  goToSubmitReview(event) {
    event.preventDefault();
    this.context.router.history.push(`/submit-review`)
  }

  goToBrowseReviews(event) {
    event.preventDefault();
    this.context.router.history.push(`/browse-reviews`)
  }

  render() {
    return (
      <div>
        <h1>Bus Buddy</h1>
        <form onSubmit={(e) => this.goToSubmitReview(e)}>
          <button type="submit" >Submit a Review</button>
        </form>
        <form onSubmit={(e) => this.goToBrowseReviews(e)}>
          <button type="submit" >Browse Reviews</button>
        </form>
      </div>
    );
  }
}

MainPage.contextTypes = {
   router: PropTypes.object
}

export default MainPage;
