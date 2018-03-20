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
    this.deleteMission = this.deleteMission.bind(this);
  }

  addToDo(toDo){
    const timing = Date.now();
    const newwtoDo = {toDo, timing};

    var newToDo = this.state.missions.concat([newwtoDo]);
    this.setState({missions: newToDo});
  }

  deleteMission(id){

    const newTodo = this.state.missions.filter(mission => {
      return mission.timing != id;
    });

    this.setState({missions: newTodo});
  }

  render() {
    return (
      <div className="container">
        <h1>Best to do app</h1>

        <Form addToDo={this.addToDo}/>

        <ul>
          <TodosList missions={this.state.missions} deleteMission={this.deleteMission}/>
        </ul>

      </div>
    );
  }
}
