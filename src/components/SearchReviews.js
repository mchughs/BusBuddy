import React from 'react';
import Review from './Review';

class SearchReviews extends React.Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      origin : '',
      destination : '',
    }
  }

  search() {
    const { reviews } = this.props;
    const filtered = reviews
      .filter(review =>
        review.origin.indexOf(this.state.origin) >= 0 &&
        review.destination.indexOf(this.state.destination) >= 0)
      .map((review, i) => <Review {...reviews} key={i} i={i} review={review} />)
    return filtered;
  }

  handleChange(e) {
    e.preventDefault();
    const origin = this.refs.origin.value;
    const destination = this.refs.destination.value;
    this.setState({ origin, destination });
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange}>
          {/*will replace with Geosuggest*/}
          {/*Fix a bug where change handler is triggering a state change where it shouldn't*/}
          <input type="text" ref="origin" placeholder="Where are you leaving from?"/>
          <input type="text" ref="destination" placeholder="Where are you going to?"/>
        </form>
        {this.search()}
      </div>
    )
  }
}

export default SearchReviews;
