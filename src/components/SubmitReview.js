import React from 'react';
import Select, { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';


import Checkbox from './Checkbox';
import moment from 'moment';
import Geosuggest from 'react-geosuggest';
import LocationPicker from './LocationPicker';
import TimePicker from './TimePicker';

class SubmitReview extends React.Component {
  state = {
      selectedOption: '',
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
  		// selectedOption can be null when the `x` (close) button is clicked
  		if (selectedOption) {
      	console.log(`Selected: ${selectedOption.label}`);
  		}
    }
    render() {
    	const { selectedOption } = this.state;

      return (
        <div>
          <h1>Bus Ride Review</h1>
            <LocationPicker />
          <h2>Choose a Bus Company</h2>
          {/*Gotta make user enter values persist/
            add them to some global list/
            sanitize them*/}
            <Creatable
              name="form-field-name"
              value={selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'Upendo', label: 'Upendo' },
                { value: 'Abood', label: 'Abood' },
              ]}
            />
          <h2>Cost of Ticket</h2>
            <form>
              <label>
                <input type="text" name="price" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          <h3>Did your bus break down?</h3>
          {/*Will need to open up additional questions if Yes
              Needs to save state somehow*/}
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="option1" />
                  Yes
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" />
                  No
                </label>
              </div>
            </form>
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
          <h3>Additional Comments</h3>
          {/*Include maps.me pins here if the location isn't obvious*/}
            <form >
              <label>
                Essay:
                <textarea />
              </label>
              <input type="submit" value="Submit" />
            </form>
          <TimePicker />

        </div>
      );
    }
  }

export default SubmitReview;
