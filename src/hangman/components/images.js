import React, { Component } from 'react';

import hanger1 from './hanger1.svg';

export class Images extends Component {
  render() {
    return (
      <div className="gallows" background-color="green">
        <img src= { hanger1 } height="50%" width="40%"  />
      </div>
    );
  }
}

export default Images;
