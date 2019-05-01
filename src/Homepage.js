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
          <img src="https://user-images.githubusercontent.com/15258799/57022768-4612bb80-6c5a-11e9-820d-9f0532f92303.gif" />
        </div>
      </div>
    );
  }
}

export default Homepage;
