import React, { Component } from "react";

import "./App.css";
import "./About.css";


class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Project">
        <div className="para">
          <h1>
          Uh... This is awkward...
          </h1>
          <p>
          I'm currently still writing the code for this part. If you like, you can download the pdf version of the portfolio <a href="https://drive.google.com/open?id=17e4sgCcPEhqvgychJFk4K-o74r1p-i7J" target="_blank">here</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Project;
