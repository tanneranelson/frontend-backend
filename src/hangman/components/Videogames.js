import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';
import { Images } from './images';

export class Videogames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
    this.randindex = Math.floor(Math.random() * games.length)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  createWord = () => {
    var word = ""
    for (var i = 0; i < games[this.randindex].length; i++) {
      if (games[this.randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    //console.log(word);
    return (
      <div>
        <h1 style={{whiteSpace: "pre"}}>{word}</h1>
      </div>
    )
  }

  render () {
    return (
      <div>
        <AppHeader />
        <Images />
        Games
        {this.createWord()}
        <button onClick={this.handleClick}>Solution</button>
        <h1>{this.state.clicked ? games[this.randindex] : null}</h1>
      </div>
    );
  }
}
