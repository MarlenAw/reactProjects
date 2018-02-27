import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChangeColorOnClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const myDiv = document.querySelector('#myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';

    const newMessage = this.state.message == '' ? 'red' : 'Its red already';
    this.setState({ message: newMessage });
  }

  render() {
    return (
      <div className="containerStyle">
        <button onClick={this.changeColor}>Change me to RED</button>
        <div id="myDiv">Color: {this.state.message}</div>
      </div>
    );
  }
}

export default ChangeColorOnClick;
