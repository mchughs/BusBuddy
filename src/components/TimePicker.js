import React from 'react';
import Timekeeper from 'react-timekeeper';

class TimePicker extends React.Component {
    render() {

      return (
        <div>
          <h2>Pick the ticket departing time</h2>
            <Timekeeper
            />
          <h2>Pick the actual departing time</h2>
            <Timekeeper
            />
          <h2>Pick the actual arrival time</h2>
            <Timekeeper
            />
        </div>
      );
    }
  }

export default TimePicker;
