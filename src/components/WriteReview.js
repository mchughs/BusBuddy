import React from 'react';
import Review from './Review';
import Geosuggest from 'react-geosuggest';


class WriteReview extends React.Component {
  constructor (props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.origin.value);
  }


  render() {
    return (
      <div>
        {console.log(this.props)}
        {/*Enter the various fields*/}
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="destination" placeholder="Where did you start your trip?"></input>
            <h2>Select a Departing Location</h2>
              <Geosuggest country = "TZ">
                <div class="geosuggest">
                  <div class="geosuggest__input-wrapper">
                    <input type="text"
                           class="geosuggest__input"
                           autocomplete="off"
                           placeholder="Select Village/Town/City"
                           value=""
                           ref="origin"
                    />
                  </div>
                </div>
              </Geosuggest>
            <button></button>
        </form>
        {/*Then display the completed review the user has writen*/}

        {/*<Review />*/}

        {/*Get confirmation for the user that the information is correct*/}
        {/*<Review review={this.refs} />*/}
        {/*forward that data state to the store with actions and reducers*/}

      </div>
    )
  }
}

export default WriteReview;
