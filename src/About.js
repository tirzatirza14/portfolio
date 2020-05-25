import React, { Component } from "react";


import "./About.css";


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <div className="aboutText">
          <p>
            I <sup>tirza</sup> am a UI/UX designer with background in
            Interactive Media Arts. I love my prototyping softwares as much as I love
            my text editors (shout out to Atom and p5 Editor!). I've worked on
            posters, editorial layout, and digital UI/UX products in 3 countries across Asia.

            <br/> <br/> Currently, I work as a UI/UX Designer at Aleph-Labs, a boutique digital experience company based 
            in 7 APAC countries and a recent addition to the WPP AU-NZ family. I design low and high fidelity 
            wireframes of apps and websites, usability testing flows and reports for clients in the telecommunications 
            and banking industry. Some of the projects I have enjoyed crafting will soon arrive 
            in the hands of BCA (Bank Central Asia) and Telkomsel customers. 

            <br/> <br/>I'm always happy
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
