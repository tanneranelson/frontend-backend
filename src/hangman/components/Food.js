import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';

export class Food extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { score: 0, randomWord: {RandomWord} };
  // }
  createWord = () => {
    var word = ""
    var randindex = Math.floor(Math.random() * 5)
    for (var i = 0; i < movies[randindex].length; i++) {
      if (movies[randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    console.log(word);
    return (
      <h1 style={{whiteSpace: "pre"}}>{word}</h1>
    )
  }
  render () {
    return (
      <div>
        food
        {this.createWord()}
      </div>
    );
  }
}
