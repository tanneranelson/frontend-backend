import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';
import { Images } from './images';
import { Backgroundimage } from './backgroundimage';


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
      <h1 style={{whiteSpace: "pre", fontSize: 80}}>{word}</h1>
      <h1>{foods[randindex]}</h1>
      </div>
    )
  }



  render () {
    return (
     <div style={{textAlign: "center"}}>>
        <AppHeader />
        <h1>Food</h1>
        <Images />
        {this.createWord()}
      </div>
    );
  }
}
