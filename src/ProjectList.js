import React, { Component } from "react";

import "./App.css";
import "./Project.css";
import Image from "./Image.js";
import Project from "./Project.js"


class ProjectList extends Component{

  render() {
   let stateCur = window.location.pathname.charAt(9);

   let projects = this.props.projectState.map((project) => {
    return project.name.charAt(0) === stateCur
    ? 
    <Project 
    name = {project.name} 
    body={project.body} 
    Hero={project.Hero} 
    backCol={project.backCol} 
    One={project.One}
    OText = {project.OText}
    Two={project.Two}
    Three={project.Three}
    TText={project.TText}
    Four={project.Four}
    Five={project.Five}
    /> 
    : 
    "";
  })

  return (
      <div className="ProjectList">
     
      {projects}
      </div>
  )

  }
  

  
}

export default ProjectList;
