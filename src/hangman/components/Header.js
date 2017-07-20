import React, { Component } from 'react';
import './style.css';

import logo from './logo.svg';

export class AppHeader extends Component {
  render() {
    return (
      <div id="heder" class="header" margin="0 auto">
        <img src= { logo } className="headimg" />
      </div>
    );
  }
}

export default AppHeader;
