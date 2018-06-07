import React from 'react';
import Select, { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

import moment from 'moment';

/*Components*/
import LocationPicker from './LocationPicker';
import TimePicker from './TimePicker';
import FeatureCheckList from './FeatureCheckList';
import Comments from './Comments';
import BusBreakdown from './BusBreakdown';
import TicketPrice from './TicketPrice';

class SubmitReview extends React.Component {
  constructor() {
    super();

    this.addPrice = this.addPrice.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addPlace = this.addPlace.bind(this);

    this.state = {
      origin: '',
      destination: '',
      price: 0,
      selectedOption: '',
      comment: '',
    };
  }

  addPrice(price) {
    this.setState({price});
  }

  addComment(comment) {
    this.setState({comment});
  }

  addPlace(place, isDestination) {
    isDestination ?
    this.setState({ destination : place }) :
    this.setState({ origin      : place });
  }

  handleChange = (selectedOption) => {
      this.setState({ selectedOption });
  		// selectedOption can be null when the `x` (close) button is clicked
  		if (selectedOption) {
      	console.log(`Selected: ${selectedOption.label}`);
  		}
    }

  render() {
  	const { selectedOption } = this.state;

    return (
      <div>
        <h1>Bus Ride Review</h1>
        <LocationPicker addPlace={this.addPlace}/>
        <h2>Choose a Bus Company</h2>
        {/*Gotta make user enter values persist/
          add them to some global list/
          sanitize them*/}
          <Creatable
            name="form-field-name"
            value={selectedOption}
            onChange={this.handleChange}
            options={[
              { value: 'Upendo', label: 'Upendo' },
              { value: 'Abood', label: 'Abood' },
            ]}
          />
        <TicketPrice addPrice={this.addPrice}/>
        <BusBreakdown />
        <FeatureCheckList />
        <TimePicker />
        <Comments addComment={this.addComment}/>
      </div>
    );
  }
}

export default SubmitReview;
