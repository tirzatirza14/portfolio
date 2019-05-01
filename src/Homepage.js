import React, { Component } from "react";

import "./App.css";
import "./Homepage.css";
import Title from "./Title";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Homepage">
        <div className="imageWrapper">
          <img src="https://raw.githubusercontent.com/tirzatirza14/portfolio/master/spread.gif" />
        </div>
      </div>
    );
  }
}

export default Homepage;
