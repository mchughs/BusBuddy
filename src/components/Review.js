import React from 'react';

class Review extends React.Component {
  timeFormatter(time) {
    let str = '';
    str += time.hours.toString().padStart(2,'0') + ':';
    str += time.minutes.toString().padStart(2,'0') + ' ';
    str += (time.AM) ? 'AM' : 'PM';
    return str;
  }

  elapsedTime(t1 , t2) {
    // Convert to 24h
    t1.hours = t1.AM ? t1.hours : t1.hours+12;
    t2.hours = t2.AM ? t2.hours : t2.hours+12;
    // Convert to minutes
    let t1_new = t1.hours*60 + t1.minutes;
    let t2_new = t2.hours*60 + t2.minutes;
    let t = t2_new - t1_new;
    return (`${Math.floor(t / 60)} hour(s) and ${t % 60} minute(s)`);
  }

  render() {
    const { review, i } = this.props;
    return (
      <div className="review">
        <div className="top">
          <div className="location start">From: {review.origin}</div>
          <div className="time start">Left at: {this.timeFormatter(review.departure_time)}</div>
          <div className="location stop">To: {review.destination}</div>
          <div className="time stop">Arrived at: {this.timeFormatter(review.arrival_time)}</div>
        </div>
        <div>Total travel time was:
          {this.elapsedTime(review.departure_time,review.arrival_time)}
        </div>
        <p className="bottom">Field of Checkboxes</p>
        <p className="bottom">Comments: {review.comment}</p>
      </div>
    )
  }
}

export default Review;
