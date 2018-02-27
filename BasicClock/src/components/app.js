import React, { Component } from 'react';
import Clock from './Clock';
import ClickMeButton from './ClickMeButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Clock />
        <ClickMeButton />
      </div>
    );
  }
}

export default App;
