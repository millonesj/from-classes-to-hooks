import React, { Component } from 'react';

class Resize extends Component {
  constructor() {
    super();
    this.state = { width: 0, height: 0 };
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  componentWillMount () {
    this.updateDimensions();
  }

  componentDidMount () {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render () {
    return (
      <div>
        <h2>Dimensions of the Current Windows</h2>
        {`Width: ${this.state.width} | Height: ${this.state.height}`}
      </div>
    );
  }
}

export default Resize;
