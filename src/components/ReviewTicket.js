import React from 'react';

class ReviewTicket extends React.Component {
  timeFormatter(time) {
    let str = '';
    str += time.hours.toString().padStart(2,'0') + ':';
    str += time.minutes.toString().padStart(2,'0') + ' ';
    str += (time.AM) ? 'AM' : 'PM';
    return str;
  }

  render() {
    console.log({...this.props.params}.price)

    return (
      <div>
        <div>Bus Company: {{...this.props.params}.company}</div>
        <ul>
          <li>From: {{...this.props.params}.origin}</li>
          <li>To: {{...this.props.params}.destination}</li>
        </ul>
        <div>Price: {{...this.props.params}.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} TSh</div>
        <p>Comment: {{...this.props.params}.comment}</p>
        <div>Ticket Departure Time: {this.timeFormatter({...this.props.params}.ticket_time)}</div>
        <div>Departed at: {this.timeFormatter({...this.props.params}.departure_time)}</div>
        <div>Arrived at: {this.timeFormatter({...this.props.params}.arrival_time)}</div>
        {/*Either make the features display in a table or as a series of boxes with X or 'checks'*/}

      </div>
    );
  }
}

export default ReviewTicket;
