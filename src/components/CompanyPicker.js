import React from 'react';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

class CompanyPicker extends React.Component {
  constructor(props){
    super(props);
    this.props.fetchCompanies();
    this.state = {
      selectedOption: '',
    }
  }

  handleChange = (selectedOption) => {
    // If the user has deleted their selection, exit
    if (selectedOption === null ) {return;}
    
    const inputCompany = {
      label: selectedOption.label.toUpperCase(),
      value: selectedOption.value.toUpperCase(),
    }
    this.setState({ selectedOption: inputCompany });
    this.props.addCompany(inputCompany.value);
    // if the user-selected company is not in the list, add it to the database
    const pos = Object.values(this.props.companies)
                  .map((company) => company.value)
                  .indexOf(inputCompany.value);
    console.log(pos);
    if(pos < 0) {
      const company = { value:inputCompany.value, label:inputCompany.value }
      this.props.addToDataBase(company);
    }
  }

  compare(a,b) {
    if (a.value < b.value)
      return -1;
    if (a.value > b.value)
      return 1;
    return 0;
  }

  render() {
  	const { selectedOption } = this.state;
    const options = Object.values(this.props.companies).sort(this.compare);

    return (
      <div>
        <h2>Bus Company</h2>
        <Creatable
          className="creatable"
          value={selectedOption || ''}
          onChange={this.handleChange}
          placeholder="Enter a bus company"
          options={options}
        />
    </div>
    );
  }
}

export default CompanyPicker;
