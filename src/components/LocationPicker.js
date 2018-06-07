import React from 'react';
import Geosuggest from 'react-geosuggest';

class LocationPicker extends React.Component {
    render() {

      return (
        <div>
          <h2>Select a Departing Location</h2>
            <Geosuggest >
              <div class="geosuggest">
                <div class="geosuggest__input-wrapper">
                  <input type="text" class="geosuggest__input" autocomplete="off" placeholder="Search places" value="" />
                </div>
              </div>
            </Geosuggest>
          <h2>Select a Destination</h2>
            <Geosuggest >
              <div class="geosuggest">
                <div class="geosuggest__input-wrapper">
                  <input type="text" class="geosuggest__input" autocomplete="off" placeholder="Search places" value="" />
                </div>
              </div>
            </Geosuggest>
        </div>
      );
    }
  }

export default LocationPicker;
