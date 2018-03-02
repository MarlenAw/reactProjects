import React, {Component} from 'react';

class Interests extends Component{
  render(){
    return(
      <ul className="list-unstyled interests-list">
        <li>{this.props.item}</li>
      </ul>
    )
  }
}

export default Interests;
