import React from 'react';

class TicketPrice extends React.Component {
  submitPrice(event) {
    event.preventDefault();
    const price = this.price.value;
    this.props.addPrice(price);
  }

  render() {
    return (
      <div>
        <h2>Cost of Ticket</h2>
          <form onChange={(e) => this.submitPrice(e)} onSubmit={(e) => (e.preventDefault(e))}>
            <label>
              <input ref={(input) => this.price = input}
                     type="number"
                     step="100"
                     placeholder="Ticket Price"
              />
            </label>
          </form>
      </div>
    );
  }
}

export default TicketPrice;
