import React, { Component } from "react";
import "./App.css";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }
  _onMouseMove = e => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const oX = e.nativeEvent.offsetX / width * 200;
    const oY = e.nativeEvent.offsetY / height * 100;
    this.setState({
      x: oX,
      y: oY
    });
  };

  _onMouseOut = () => {
    this.setState({
      x: 0,
      y: 0
    });
  };

  render() {
    const { text } = this.props;
    const { x, y } = this.state;
    const maskStyle = {
      "--maskX": x,
      "--maskY": y
    };

    const { srcImg } = this.props;
    return (
      <div
        className="titleContainer"
        onMouseMove={this._onMouseMove}
        onMouseOut={this._onMouseOut}
        ref="titleContainer"
        style={maskStyle}
      >
        <div className="titleWrapper">
          <h2>{text}</h2>
        </div>
        <div className="titleWrapper cloneWrapper">
          <h2>{text}</h2>
        </div>
      </div>
    );
  }
}

export default Title;
