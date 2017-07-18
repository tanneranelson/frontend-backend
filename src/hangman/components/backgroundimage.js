import React, { Component } from 'react';
import background from './background.svg';

export class Backgroundimg extends Component {
  render() {
    return (
      <div>
        <img src= { background } className="backgroundimg" />
      </div>
    );
  }
}

export default Backgroundimg;
