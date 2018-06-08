import React from 'react';
import Geosuggest from 'react-geosuggest';
import base from '../base';

import ReviewTicket from './ReviewTicket';

class BrowseReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      start: '',
      stop: '',
      reviews : ['another one'],
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`/browse-reviews`
      , {
        context: this,
        state: 'reviews'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  findReviews(event) {
    const reviews = [...this.state.reviews, ('and another one')];
    this.setState({reviews});
  }

  addStart(start) {
    this.setState({start});
  }

  addStop(stop) {
    this.setState({stop});
  }

  render() {
    return (
      <div>
        <h2>Where are you starting your trip?</h2>
          <Geosuggest onSuggestSelect={(e) => (e !== undefined ? this.addStart(e.label) : 'do nothing')}
                      country = "TZ">
            <div class="geosuggest">
              <div class="geosuggest__input-wrapper">
                <input type="text"
                       class="geosuggest__input"
                       autocomplete="off"
                       placeholder="Select Village/Town/City"
                       value=""
                       ref={(input) => this.origin = input}
                />
              </div>
            </div>
          </Geosuggest>
        <h2>Where are you ending your trip?</h2>
          <Geosuggest onSuggestSelect={(e) => (e !== undefined ? this.addStop(e.label) : 'do nothing')}
                      country = "TZ">
            <div class="geosuggest">
              <div class="geosuggest__input-wrapper">
                <input type="text"
                       class="geosuggest__input"
                       autocomplete="off"
                       placeholder="Select Village/Town/City"
                       value=""
                       ref={(input) => this.destination = input}
                />
              </div>
            </div>
          </Geosuggest>
        <form onSubmit={(e) => this.findReviews(e)}>
          <button type="submit" >Find Reviews</button>
        </form>
      </div>
    );
  }
}

export default BrowseReviews;
