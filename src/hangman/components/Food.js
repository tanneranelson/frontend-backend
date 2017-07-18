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
    var randindex = Math.floor(Math.random() * foods.length)
    for (var i = 0; i < foods[randindex].length; i++) {
      if (foods[randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    console.log(word);
    return (
      <div>
      <h1 style={{whiteSpace: "pre"}}>{word}</h1>
      <h1>{foods[randindex]}</h1>
      </div>
    )
  }



  render () {
    return (
      <div>
        Food
        {this.createWord()}
      </div>
    );
  }
}
