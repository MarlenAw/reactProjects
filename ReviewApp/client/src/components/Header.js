import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {

  renderContent(){
    switch(this.props.auth){
      case null:
        return 'Still deciding';
      case false:
        return 'Im loggedout';
      default:
        return 'Im loggedin';
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth: auth };  // the auth key is coming from ../reducers/index.js
}

export default connect(mapStateToProps)(Header);
