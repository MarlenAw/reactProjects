import React, { Component } from 'react';

import Form from './Form';
import TodosList from './TodosList';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      missions: []
    }

    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(toDo){
    const newwtoDo = {toDo};

    var newToDo = this.state.missions.concat([newwtoDo]);
    this.setState({missions: newToDo});
  }


  render() {
    return (
      <div className="container">
        <h1>Best to do app</h1>

        <Form addToDo={this.addToDo}/>

        <ul>
          <TodosList missions={this.state.missions}/>
        </ul>

      </div>
    );
  }
}
