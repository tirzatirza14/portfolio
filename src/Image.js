import React, { Component } from "react";
import "./App.css";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgSrc } = this.props;
    return (
      <div className="Image">
        <img src={imgSrc} />
      </div>
    );
  }
}

export default Image;
