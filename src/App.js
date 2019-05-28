import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Title from "./Title";
import Image from "./Image";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Project from "./Project";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
          <NavLink
            exact
            to="/"
            activeClassName={"active"}
            style={{ textDecoration: "none" }}
          >
            <h1>home</h1>
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={"active"}
            style={{ textDecoration: "none" }}
          >
            <h1>about</h1>
          </NavLink>
          <h1><a href="https://www.linkedin.com/in/tirzaalberta/" target="_blank">linkedin</a></h1>
          <h1><a href="https://www.behance.net/teealberta" target="_blank">behance</a></h1>
          <h1><a href="https://drive.google.com/file/d/1i2ab6mJYvlLVj1hY0kyvVJ71CyWvLFx2/view?usp=sharing" target="_blank">résumé</a></h1>

          <div className="titles">
            <NavLink
              exact
              to="/project"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="branding." />
            </NavLink>
      
           <a href="https://www.behance.net/teealberta" target ="_blank"><Title text="collages." /></a>

            <NavLink
              exact
              to="/project"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="keynote designs." />
            </NavLink>

            <NavLink
              exact
              to="/project"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="posters." />
            </NavLink>

            <NavLink
              exact
              to="/project"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="user interface designs." />
            </NavLink>

          </div>
        </div>

        <div classNames="content">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/project/" component={Project} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
