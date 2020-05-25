import React, { Component } from "react";
import './Project.css';

class Project extends Component {
	render() {

	let divStyle = {
  		backgroundColor: "#" + this.props.backCol
	};
   		
    return (
      <div className="Project" style={divStyle}>
           <h1>{this.props.name}</h1>
           <p>{this.props.body}</p>
           <img src={this.props.Hero}/>
	       <img src={this.props.One}/>
	       <p>{this.props.OText}</p>
	       <img src={this.props.Two}/>
	       <img src={this.props.Three}/>
	       <h2>{this.props.TText}</h2>
	       <img src={this.props.Four}/>
	       <img src={this.props.Five}/>
	       

	       
	  </div>
    );
  }
}

export default Project;