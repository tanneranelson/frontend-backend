import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';

export class Movies extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { score: 0, randomWord: {RandomWord} };
  // }
  createWord = () => {
    var word = ""
    var randindex = Math.floor(Math.random() * movies.length)
    for (var i = 0; i < movies[randindex].length; i++) {
      if (movies[randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    console.log(word);
    return (
      <div>
        <h1 style={{whiteSpace: "pre"}}>{word}</h1>
        <h1>{movies[randindex]}</h1>
      </div>
    )
  }
  render () {
    return (
      <div>
        <AppHeader />
        movies
        {this.createWord()}
      </div>
    );
  }
}
