import React from 'react';
import Geosuggest from 'react-geosuggest';

class LocationPicker extends React.Component {
  submitOrigin(event) {
    const origin = event.label;
    this.props.addPlace(origin, false);
  }

  submitDestination(event) {
    const destination = event.label;
    this.props.addPlace(destination, true);
  }

  render() {
    return (
      <div>
        <h2>Select a Departing Location</h2>
          <Geosuggest onSuggestSelect={(e) => (e !== undefined ? this.submitOrigin(e) : 'do nothing')}
                      country = "TZ">
            <div className="geosuggest">
              <div className="geosuggest__input-wrapper">
                <input type="text"
                       className="geosuggest__input"
                       autocomplete="off"
                       placeholder="Select Village/Town/City"
                       value=""
                       ref={(input) => this.origin = input}
                />
              </div>
            </div>
          </Geosuggest>
        <h2>Select a Destination</h2>
          <Geosuggest onSuggestSelect={(e) => (e !== undefined ? this.submitDestination(e) : 'do nothing')}
                      country = "TZ">
            <div className="geosuggest">
              <div className="geosuggest__input-wrapper">
                <input type="text"
                       className="geosuggest__input"
                       autocomplete="off"
                       placeholder="Select Village/Town/City"
                       value=""
                       ref={(input) => this.destination = input}
                />
              </div>
            </div>
          </Geosuggest>
      </div>
    );
  }
}

export default LocationPicker;
