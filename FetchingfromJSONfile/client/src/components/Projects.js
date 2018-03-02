import React, {Component} from 'react';

class Projects extends Component{
  render(){
    return(
      <div className="item">
        <span className="project-title">
          <a
            href={this.props.item.url}
            target="_blank"
          >
            {this.props.item.name}
          </a>
        </span>
        <br/>
        <br/>
        <span className="project-tagline">
          {this.props.item.detail}
        </span>
      </div>
    )
  }
}

export default Projects;
