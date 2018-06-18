import React from 'react';
import Review from './Review';
import Timekeeper from 'react-timekeeper';
import firebase from 'firebase';

class SearchReviews extends React.Component {
  constructor(props){
    super(props);

    this.props.fetchReviews();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        this.setState({uid});
      } else {
        /* If the user isn't logged in yet we should redirect them to Main.js*/
      }
    });

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      origin : '',
      destination : '',
      before: {'hours': 11, 'minutes': 59, 'AM': false},
      after: {'hours': 0, 'minutes': 0, 'AM': true},
      uid: '',
    }
  }

  search() {
    const reviews = Object.values(this.props.reviews);
    const filtered = reviews
      .filter(review =>
        review.origin.toUpperCase().indexOf(this.state.origin.toUpperCase()) == 0 &&
        review.destination.toUpperCase().indexOf(this.state.destination.toUpperCase()) == 0)
      .filter(review =>
        this.checkTime(review))
      .map((review, i) =>
        <div className="review-delete">
          <Review key={i} i={i} review={review} />
          {this.checkUser(review) ?
            /*Need to get corresponding key of the given review*/
            <button className="deletebtn" onClick={() => this.props.removeReview(this.getKey(review))}>X</button> :
            <br/>}
        </div>)
    // Returns a message if no reviews match
    return filtered.length ? filtered : <div>No matches found.</div>
  }

  getKey(review) {
    const keys = Object.keys(this.props.reviews);
    const values = Object.values(this.props.reviews);
    return(keys[values.indexOf(review)]);
  }

  checkTime(review) {
    {/*annoying fact that 12pm is actually 12:00 not 24:00 or 00:00*/}
    const a = review.ticket_time.hours != 12 ?
      (review.ticket_time.AM ? review.ticket_time.hours : review.ticket_time.hours+12) :
      review.ticket_time.hours;
    const b = this.state.before.hours != 12 ?
      (this.state.before.AM ? this.state.before.hours : this.state.before.hours+12) :
      this.state.before.hours;
    const c = this.state.after.hours != 12 ?
      (this.state.after.AM ? this.state.after.hours : this.state.after.hours+12) :
      this.state.after.hours;
    const ticket_time = a*60 + review.ticket_time.minutes;
    const before = b*60 + this.state.before.minutes;
    const after = c*60 + this.state.after.minutes;
    const m = before - ticket_time;
    const n = ticket_time - after;
    return (m >= 0 && n >= 0);
  }

  checkUser(review) {
    return review.uid === this.state.uid;
  }

  handleChange(e) {
    e.preventDefault();
    const origin = this.refs.origin.value;
    const destination = this.refs.destination.value;
    this.setState({ origin, destination });
  }

  handleTime(time, selector) {
    let t;
    switch(selector) {
      case 'before':
        t = {...this.state.before};
        t.hours = time.hour;
        t.minutes = time.minute;
        t.AM = (time.meridiem === "am");
        this.setState({before: t});
        break;
      case 'after':
        t = {...this.state.after};
        t.hours = time.hour;
        t.minutes = time.minute;
        t.AM = (time.meridiem === "am");
        this.setState({after: t});
        break;
      default:
        console.log(Error);
      }
    console.log(this.state.before, this.state.after);
  }

  render() {
    return (
      <div>
        <h1>
          Bus Buddy
        </h1>
        <form onChange={this.handleChange}>
          <input className="location_input" type="text" ref="origin" placeholder="Leaving from?"/>
          <input className="location_input" type="text" ref="destination" placeholder="Going to?"/>

          <details className="time_input">
            <summary>Only show buses leaving before...</summary>
              <Timekeeper className="clock" switchToMinuteOnHourSelect closeOnMinuteSelect
                          ref={(input) => this.before = input}
                          onChange={(e) => this.handleTime(e, 'before')}

              />
          </details>
          <details className="time_input">
            <summary>Only show buses leaving after...</summary>
              <Timekeeper className="clock" switchToMinuteOnHourSelect closeOnMinuteSelect
                          ref={(input) => this.after = input}
                          onChange={(e) => this.handleTime(e, 'after')}

              />
          </details>

        </form>
        <div className="reviews">{this.search()}</div>
      </div>
    )
  }
}

export default SearchReviews;
