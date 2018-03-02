import React, {Component} from 'react';

class Languages extends Component{
  render(){
    return(
      <ul className="list-unstyled interests-list">
        <li>
          {this.props.item.name} <span className="lang-desc">{this.props.item.details}</span>
        </li>
      </ul>
    )
  }
}

export default Languages;
