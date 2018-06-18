import React from 'react';
import Timekeeper from 'react-timekeeper';

class TimePicker extends React.Component {
  submitTime(event, selector) {
    switch(selector) {
      case 'ticket_time':
        this.props.addTime(this.ticket_time.state, selector);
        break;
      case 'departure_time':
        this.props.addTime(this.departure_time.state, selector);
        break;
      case 'arrival_time':
        this.props.addTime(this.arrival_time.state, selector);
        break;
      default:
        console.log('TimePicker Error');
      }
  }

  render() {
    return (
      <div className="clock-container">
        <h2 >Pick the ticket departing time</h2>
          <Timekeeper  switchToMinuteOnHourSelect closeOnMinuteSelect
            onChange={(e) => this.submitTime(e, 'ticket_time')}
            ref={(input) => this.ticket_time = input}
          />
        <h2 >Pick the actual departing time</h2>
          <Timekeeper  switchToMinuteOnHourSelect closeOnMinuteSelect
            onChange={(e) => this.submitTime(e, 'departure_time')}
            ref={(input) => this.departure_time = input}
          />
        <h2 >Pick the actual arrival time</h2>
          <Timekeeper  switchToMinuteOnHourSelect closeOnMinuteSelect
            onChange={(e) => this.submitTime(e, 'arrival_time')}
            ref={(input) => this.arrival_time = input}
          />
      </div>
    );
  }
}

export default TimePicker;
