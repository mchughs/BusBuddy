import React from 'react';
import Checkbox from './Checkbox';

class FeatureCheckList extends React.Component {
    render() {

      return (
        <div>
          <h3>What was on your bus?</h3>
            <Checkbox
              label={"AC"}
            />
            <Checkbox
              label={"Music Videos"}
            />
            <Checkbox
              label={"Movies"}
            />
            <Checkbox
              label={"Chickens"}
            />
        </div>
      );
    }
  }

export default FeatureCheckList;
