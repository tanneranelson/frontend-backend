import React, { Component } from 'react';
import hanger1 from './hanger1.svg';

export class Images extends Component {
  render() {
    return (
      <div className="gallows" background-color="green">
        <img src= { hanger1 } height="100%" width="80%"  />
      </div>
    );
  }
}

export default Images;
