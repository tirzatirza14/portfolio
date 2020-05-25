import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Title from "./Title";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import ProjectList from "./ProjectList";
import "./App.css";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          key: "0", 
          name: "branding",
          Hero: "https://user-images.githubusercontent.com/15258799/82795481-481b6e00-9e9e-11ea-8bf1-697d2f1ada1b.png",
          One: "https://user-images.githubusercontent.com/15258799/82795540-5d909800-9e9e-11ea-8ec1-f6580fcdafb8.png",
          Two: "https://user-images.githubusercontent.com/15258799/82795597-6f723b00-9e9e-11ea-8bb7-a857ad89c291.png",
          Three: "https://user-images.githubusercontent.com/15258799/82795610-7436ef00-9e9e-11ea-9aec-f182730089d6.png",
          Four: "https://user-images.githubusercontent.com/15258799/82795774-ac3e3200-9e9e-11ea-8dfa-b6088405f621.png",
          proName: "DUMBO Original",
          body: "DUMBØ Original, a healthconscious catering startup, was looking to refresh its logo and a variety of its design collaterals. Together with the marketing team, I introduced a vibrant visual elements, including but not limited to logo, typefaces, and colours, to match DUMBØ Original’s customer base that’s young, active, and health conscious."
          }, 
        {
          key: "1", 
          name: "collages",
          Hero: "https://user-images.githubusercontent.com/15258799/82790925-14891580-9e97-11ea-9df0-7aaf4888776b.png",
          One: "https://user-images.githubusercontent.com/15258799/82791962-d42a9700-9e98-11ea-8db7-8d6083a7408d.png",
          Two: "https://user-images.githubusercontent.com/15258799/82792215-3edbd280-9e99-11ea-9936-5afbf49d77fa.png",
          Three: "https://user-images.githubusercontent.com/15258799/82792224-413e2c80-9e99-11ea-94a5-c1ee2af5214b.png",
          Four: "https://user-images.githubusercontent.com/15258799/82793111-94fd4580-9e9a-11ea-852f-bf7c8132707d.png",
          Five: "https://user-images.githubusercontent.com/15258799/82793123-9a5a9000-9e9a-11ea-8369-19a08d50cabc.png",
          body: "During my time at Niteco, a full-service digital agency in Hanoi, Vietnam, I created digital collages to accompany blog pieces as well as social media posts. Collage was the medium of choice because I sought to add a human/analogue touch that speaks of the human-centric principle of Niteco’s services."
        },
        {
          key: "2", 
          name: "keynote designs",
          body: "Whoops... I'm currently still tidying up this part. Feel free to reach out to me at tirza.alberta@gmail.com if you're interested about this section of the webpage."
        },
        {
          key: "3", 
          name: "posters",
          Hero: "https://user-images.githubusercontent.com/15258799/82794288-6c764b00-9e9c-11ea-9b89-d64ace9d3ee3.png",
          One: "https://user-images.githubusercontent.com/15258799/82794271-66806a00-9e9c-11ea-9524-3efc5281b84c.png",
          Two: "https://user-images.githubusercontent.com/15258799/82794431-ab0c0580-9e9c-11ea-9bac-95068d82b9fe.png",
          Three: "https://user-images.githubusercontent.com/15258799/82793911-e0642380-9e9b-11ea-839d-7590cb86fc37.png",
          body: "Throughout 4 years of my stay in Shanghai, China, I have worked with various student organisations such as Jiao Tong University and New York University to create posters for events ranging from art exhibition to food festivals."
        },
        {
          key: "4", 
          name: "user interface design",
          body: "Whoops... I'm currently still tidying up this part. Feel free to reach out to me at tirza.alberta@gmail.com if you're interested about this section of the webpage."
        }
      ]
    }
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
          <h1><a rel="noopener noreferrer" href="https://www.linkedin.com/in/tirzaalberta/" target="_blank">linkedin</a></h1>
          <h1><a rel="noopener noreferrer" href="https://www.behance.net/teealberta" target="_blank">behance</a></h1>
          <h1><a rel="noopener noreferrer" href="https://drive.google.com/file/d/1i2ab6mJYvlLVj1hY0kyvVJ71CyWvLFx2/view?usp=sharing" target="_blank">résumé</a></h1>

          <div className="titles">
            <NavLink 
              to="/project/branding"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="branding." />
            </NavLink>
      
            <NavLink
              to="/project/collages"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="collages." />
            </NavLink>

            <NavLink
              to="/project/keynote"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="keynote designs." />
            </NavLink>

            <NavLink
              to="/project/posters"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="posters." />
            </NavLink>

            <NavLink
              to="/project/user design"
              activeClassName={"active"}
              style={{ textDecoration: "none" }}
            >
              <Title text="user interface designs." />
            </NavLink>

          </div>
        </div>

        <div classnames="content">
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
                    <Route path="/project/:id" render={()=> <ProjectList projectState={this.state.projects} />} />
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
