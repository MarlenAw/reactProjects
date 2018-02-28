import React, { Component } from 'react';

class PartyInvitation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    alert('I will be going: ' + this.state.isGoing + '. Number of guests: ' + this.state.numberOfGuests);
    e.preventDefault();
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    console.log(name, value);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Invitation</h3>
          <label>
            Are you going to the party?
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            How many guests are you bringing?
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default PartyInvitation;
