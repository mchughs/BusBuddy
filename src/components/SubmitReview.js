import React from 'react';

/*Components*/
import LocationPicker from './LocationPicker';
import TimePicker from './TimePicker';
import FeatureCheckList from './FeatureCheckList';
import Comments from './Comments';
import BusBreakdown from './BusBreakdown';
import TicketPrice from './TicketPrice';
import CompanyPicker from './CompanyPicker';

class SubmitReview extends React.Component {
  constructor() {
    super();

    this.addPrice = this.addPrice.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addPlace = this.addPlace.bind(this);
    this.addFeatures = this.addFeatures.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.addTime = this.addTime.bind(this);

    this.state = {
      origin: '',
      destination: '',
      company: '',
      price: 0,
      selectedOption: '',
      comment: '',
      features: {
        isAC: false,
        isMusicVideos: false,
        isMovies: false,
        hasCurtains: false,
      },
      ticket_time: {hours: 0, minutes: 0, AM: true},
      departure_time: {hours: 0, minutes: 0, AM: true},
      arrival_time: {hours: 0, minutes: 0, AM: true},
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

  addFeatures(features) {
    this.setState({features});
  }

  addCompany(company) {
    this.setState({company});
  }

  addTime(time, selector) {
    let stateTime;
    switch(selector) {
      case 0:
        stateTime = {...this.state.ticket_time};
        stateTime.hours = time.hour;
        stateTime.minutes = time.minute;
        stateTime.AM = (time.meridiem === "am" ? true : false);
        this.setState({ticket_time: stateTime});
        break;
      case 1:
        stateTime = {...this.state.departure_time};
        stateTime.hours = time.hour;
        stateTime.minutes = time.minute;
        stateTime.AM = (time.meridiem === "am" ? true : false);
        this.setState({departure_time: stateTime});
        break;
      case 2:
        stateTime = {...this.state.arrival_time};
        stateTime.hours = time.hour;
        stateTime.minutes = time.minute;
        stateTime.AM = (time.meridiem === "am" ? true : false);
        this.setState({arrival_time: stateTime});
        break;
    }
  }

  render() {
  	const { selectedOption } = this.state;

    return (
      <div>
        <h1>Bus Ride Review</h1>
        <LocationPicker addPlace={this.addPlace}/>
        <CompanyPicker addCompany={this.addCompany}/>
        <TicketPrice addPrice={this.addPrice}/>
        <BusBreakdown />
        <FeatureCheckList addFeatures={this.addFeatures}/>
        <TimePicker addTime={this.addTime}/>
        <Comments addComment={this.addComment}/>
      </div>
    );
  }
}

export default SubmitReview;
