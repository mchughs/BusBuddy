import React from 'react';
import Timekeeper from 'react-timekeeper';

class TimePicker extends React.Component {
  submitTime(event, selector) {
    switch(selector) {
      case 0:
        this.props.addTime(this.time0.state, 0);
        break;
      case 1:
        this.props.addTime(this.time1.state, 1);
        break;
      case 2:
        this.props.addTime(this.time2.state, 2);
        break;
    }
  }

  render() {
    return (
      <div>
        <h2>Pick the ticket departing time</h2>
          <Timekeeper switchToMinuteOnHourSelect closeOnMinuteSelect
            onChange={(e) => this.submitTime(e, 0)}
            ref={(input) => this.time0 = input}
          />
        <h2>Pick the actual departing time</h2>
          <Timekeeper switchToMinuteOnHourSelect closeOnMinuteSelect
            onChange={(e) => this.submitTime(e, 1)}
            ref={(input) => this.time1 = input}
          />
        <h2>Pick the actual arrival time</h2>
          <Timekeeper switchToMinuteOnHourSelect closeOnMinuteSelect
            onChange={(e) => this.submitTime(e, 2)}
            ref={(input) => this.time2 = input}
          />
      </div>
    );
  }
}

export default TimePicker;
