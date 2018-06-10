import React from 'react';
import base from '../base';

/*Components*/
import LocationPicker from './LocationPicker';
import TimePicker from './TimePicker';
import FeatureCheckList from './FeatureCheckList';
import Comments from './Comments';
import TicketPrice from './TicketPrice';
import CompanyPicker from './CompanyPicker';
import ReviewTicket from './ReviewTicket';

class SubmitReview extends React.Component {
  constructor() {
    super();

    this.showTicketReview = this.showTicketReview.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addPlace = this.addPlace.bind(this);
    this.addFeatures = this.addFeatures.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.addTime = this.addTime.bind(this);

    this.loadDefault = this.loadDefault.bind(this);

    this.state = {
      origin: '',
      destination: '',
      company: '',
      price: 0,
      comment: '',
      features: {
        isAC: false,
        isMusicVideos: false,
        isMovies: false,
        hasCurtains: false,
        hasUSB: false,
        brokedown: false,
      },
      ticket_time: {hours: 12, minutes: 0, AM: false},
      departure_time: {hours: 12, minutes: 0, AM: false},
      arrival_time: {hours: 12, minutes: 0, AM: false},
      reviewComplete: false,
    };
  }

  loadDefault() {
    this.setState({
      origin: 'Iringa, Tanzania',
      destination: 'Singida, Tanzania',
      company: 'Abood',
      price: 28000,
      comment: 'Regular intercity bus services by steam-powered buses were \
      pioneered in England in the 1830s by Walter Hancock and by associates of \
      Sir Goldsworthy Gurney, among others, running reliable services over road \
      conditions which were too hazardous for horse-drawn transportation.',
      features: {
        isAC: false,
        isMusicVideos: true,
        isMovies: true,
        hasCurtains: false,
        hasUSB: true,
        brokedown: false,
      },
      ticket_time: {hours: 12, minutes: 30, AM: false},
      departure_time: {hours: 12, minutes: 32, AM: false},
      arrival_time: {hours: 5, minutes: 10, AM: false},
      reviewComplete: true,
    });
  }

  componentWillMount() {
    this.ref = base.syncState(`/submit-review`
      , {
        context: this,
        state: 'state',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  showTicketReview() {
    this.setState({reviewComplete: true });
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
      case 'ticket_time':
        stateTime = {...this.state.ticket_time};
        stateTime.hours = time.hour;
        stateTime.minutes = time.minute;
        stateTime.AM = (time.meridiem === "am" ? true : false);
        this.setState({ticket_time: stateTime});
        break;
      case 'departure_time':
        stateTime = {...this.state.departure_time};
        stateTime.hours = time.hour;
        stateTime.minutes = time.minute;
        stateTime.AM = (time.meridiem === "am" ? true : false);
        this.setState({departure_time: stateTime});
        break;
      case 'arrival_time':
        stateTime = {...this.state.arrival_time};
        stateTime.hours = time.hour;
        stateTime.minutes = time.minute;
        stateTime.AM = (time.meridiem === "am" ? true : false);
        this.setState({arrival_time: stateTime});
        break;
      default:
        throw "The clock you selected isn't hooked up right";
        break;
    }
  }

  render() {
    const mainPage = (
      <div>
        <h1>Bus Ride Review</h1>
          <LocationPicker addPlace={this.addPlace}/>
          <CompanyPicker addCompany={this.addCompany}/>
          <TicketPrice addPrice={this.addPrice}/>
          <FeatureCheckList addFeatures={this.addFeatures}/>
          <TimePicker addTime={this.addTime}/>
          <Comments addComment={this.addComment}/>
          <div>
            <button type="submit" onClick={this.loadDefault}>loadDefault</button>
          </div>
          <div>
            <button type="submit" onClick={this.showTicketReview}>Submit</button>
          </div>
      </div>
    );

    const ticketPage = (
      <ReviewTicket params={this.state}/>
    )

    return (<div>{this.state.reviewComplete ? ticketPage : mainPage }</div>);
  }
}

export default SubmitReview;
