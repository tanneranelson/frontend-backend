import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';

export class Videogames extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { score: 0, randomWord: {RandomWord} };
  // }
  createWord = () => {
    var word = ""
    var randindex = Math.floor(Math.random() * games.length)
    for (var i = 0; i < games[randindex].length; i++) {
      if (games[randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    console.log(word);
    return (
      <div>
        <h1 style={{whiteSpace: "pre"}}>{word}</h1>
        <h1>{games[randindex]}</h1>
      </div>
    )
  }
  render () {
    return (
      <div>
        videogames
        {this.createWord()}
      </div>
    );
  }
}
