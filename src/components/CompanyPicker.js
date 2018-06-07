import React from 'react';
import Select, { Creatable } from 'react-select';
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
      <Creatable
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

export default CompanyPicker;
