import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';

/*Components*/
import LocationPicker from './LocationPicker';
import TimePicker from './TimePicker';
import FeatureCheckList from './FeatureCheckList';
import Comments from './Comments';
import TicketPrice from './TicketPrice';
import CompanyPicker from './CompanyPicker';
import Review from './Review';

class SubmitReview extends React.Component {
  constructor() {
    super();

    this.finalize = this.finalize.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addPlace = this.addPlace.bind(this);
    this.addFeatures = this.addFeatures.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.addTime = this.addTime.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        this.setState({uid});
      } else {
        /* If the user isn't logged in yet we should redirect them to Main.js*/
      }
    });

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
      reviewId: null,
      referrer: null,
      uid: null,
    };
  }

  finalize(e) {
    /*Time stamp the review*/
    const reviewId = Date.now()
    this.setState({ reviewId });
    /*Send all the data in the state over to be included in the array of reviews*/
    this.props.addReview(this.state);
    this.setState({referrer: '/'});
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
    const inputPage = (
      <div className="container">
        <h1>Bus Ride Review</h1>
          <LocationPicker addPlace={this.addPlace}/>
          <CompanyPicker addCompany={this.addCompany}/>
          <TicketPrice addPrice={this.addPrice}/>
          <FeatureCheckList addFeatures={this.addFeatures}/>
          <TimePicker addTime={this.addTime}/>
          <Comments addComment={this.addComment}/>
      </div>
    );

    const reviewPage = (
      <div className="reviews">
        <h2>Please check that all fields have been set correctly.</h2>
        <Review review={this.state}/>
        <br/>
        <div>
          <button className="finalize-button" type="submit" onClick={(e) => this.finalize(e)}>Finalize</button>
        </div>
      </div>
    )

    return (
      this.state.referrer ?
      <Redirect to={this.state.referrer}/> :
      <div>{ inputPage }{ reviewPage }</div>) ;
  }
}

export default SubmitReview;
