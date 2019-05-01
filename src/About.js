import React, { Component } from "react";

import "./App.css";
import "./About.css";


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <div className="para">
          <p>
            I <sup>tirza</sup> am a graphic designer with background in
            Interactive Media Arts. I love my Adobe softwares as much as I love
            my text editors (shout out to Atom and p5 Editor!). I've worked on
            posters, editorial layout, and digital UI designs. I'm always happy
            to talk about design, coffee shops, or the wireless candy dispenser
           project I made in college at{" "}
            <span> albertatirza[at]gmail[dot]com </span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
