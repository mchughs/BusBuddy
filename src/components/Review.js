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
    const a = t1.hours !== 12 ?
      (t1.AM ? t1.hours : t1.hours+12) :
      t1.hours;
    const b = t2.hours !== 12 ?
      (t2.AM ? t2.hours : t2.hours+12) :
      t2.hours;
    // Convert to minutes
    const t1_new = a*60 + t1.minutes;
    const t2_new = b*60 + t2.minutes;
    const t = t2_new - t1_new;
    return (` (${Math.floor(t / 60)}h ${t % 60}m)`);
  }

  displayFeatures(features) {
    return (
      <div>
        {features.isAC ? 'AC ✓': 'AC ✗'}
      </div> );
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { review, i } = this.props;
    return (
      <div>
        <div className="review_head">
          <div className="origin">{review.origin.replace(', Tanzania', '')}</div>
          <div className="arrow1"> ⟶ </div>
          <div className="destination">{review.destination.replace(', Tanzania', '')}</div>
          <div className="departure_time">{this.timeFormatter(review.departure_time)}</div>
          <div className="arrow2"> ⟶ </div>
          <div className="arrival_and_total">
            <div className="arrival_time">{this.timeFormatter(review.arrival_time)}</div>
            <div className="total_time">{this.elapsedTime(review.departure_time,review.arrival_time)}</div>
          </div>
        </div>

        <details className="review_tail">
          <summary className="detail_text">Details</summary>
          <div className="detail_table">
            <div className="company"><span className="category">Company:</span> {review.company}</div>
            <div className="price"><span className="category">Price:</span> {this.numberWithCommas(review.price)} TSH</div>
            <div className="ticket_time"><span className="category">Ticket time:</span> {this.timeFormatter(review.ticket_time)}</div>
          </div>

          <div className="thisbus">This bus has...</div>
          <div className="features">
            <div className="isAC">AC?</div>
            <div className="isMusicVideos">Music Videos?</div>
            <div className="isMovies">Movies?</div>
            <div className="hasCurtains">Curtains?</div>
            <div className="hasUSB">USB charging?</div>

            <div className="isAC_bool" value={review.features.isAC || false}>{review.features.isAC ? '✓': '✗'}</div>
            <div className="isMusicVideos_bool" value={review.features.isMusicVideos || false}>{review.features.isMusicVideos ? '✓': '✗'}</div>
            <div className="isMovies_bool" value={review.features.isMovies || false}>{review.features.isMovies ? '✓': '✗'}</div>
            <div className="hasCurtains_bool" value={review.features.hasCurtains || false}>{review.features.hasCurtains ? '✓': '✗'}</div>
            <div className="hasUSB_bool" value={review.features.hasUSB || false}>{review.features.hasUSB ? '✓': '✗'}</div>
          </div>
          <div className="brokedown">{review.features.brokedown ? '😢This bus brokedown at some point.😢' : '😁This bus did not break down!😁' } </div>
          <p>{review.comment}</p>
        </details>
      </div>
    )
  }
}

export default Review;
