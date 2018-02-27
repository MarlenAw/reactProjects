import React, { Component } from 'react';

class ClickMeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      count: 0
    };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.updateCount}>Click Me</button>
        <h4>Couting: {this.state.count}</h4>
      </div>
    );
  }
}

export default ClickMeButton;
