import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";


class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); //fetchUser -> ../actions/index.js
  }

  render() {
    return (

        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/surveynew" component={SurveyNew} />
          </div>
        </BrowserRouter>

    );
  }
}

export default connect(null, actions)(App);
