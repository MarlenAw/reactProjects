import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      comment: ''
    };
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
      comment: this.state.comment + 'x'
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
        <p>{this.state.comment}</p>
      </div>
    );
  }
}

export default Clock;
