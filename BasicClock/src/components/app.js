import React, { Component } from 'react';
import Clock from './Clock';
import ClickMeButton from './ClickMeButton';
import ChangeColorOnClick from './ChangeColorOnClick';

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
        <ChangeColorOnClick />
      </div>
    );
  }
}

export default App;
