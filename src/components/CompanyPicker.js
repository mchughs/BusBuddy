import React from 'react';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

class CompanyPicker extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.addCompany(selectedOption.value);
  }
  render() {
  	const { selectedOption } = this.state;

    return (
      <div>
        <h2>Bus Company</h2>
        <Creatable
          name="form-field-name"
          value={selectedOption}
          onChange={this.handleChange}
          placeholder="Enter a bus company"
          options={[
            { value: 'one', label: 'Abood' },
            { value: 'two', label: 'Upendo' },
            { value: 'two', label: 'Private Noah' },
            { value: 'two', label: '' },
          ]}
        />
    </div>
    );
  }
}

export default CompanyPicker;
