import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
