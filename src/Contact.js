import React, { Component } from "react";

import "./App.css";
import "./About.css";


class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Contact">
        <div className="para">
          <p>
            I <sup>tirza</sup> am a graphic designer with background in
            Interactive Media Arts. I love my Adobe softwares as much as I love
            my text editors (shout out to Atom and p5 Editor!). I've worked on
            posters, editorial layout, and digital UI designs. I'm always happy
            to talk about design, coffee shops, or the wireless candy dispenser
            + bookmark project I made in college at{" "}
            <strong> tirza.alberta@nyu.edu </strong>
            <em>or</em> click <strong>say hi</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
