import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';
import { Images } from './images';
var wordList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var currentWord = ''
export class Movies extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { score: 0, randomWord: {RandomWord} };
  // }

  componentDidMount = () => {
    for (let i = 0; i < wordList.length; i++) {
      let div = document.getElementsByClassName('letterButtons')[i]
      div.addEventListener('click', function () {
        var replaceAt = (str, index, char) => {
          return str.substr(0, index) + char + str.substr(index+1);
        }
        var letter = this.innerHTML
        var empty = document.getElementById("line").innerHTML
        while (currentWord.toLowerCase().indexOf(letter) != -1) {
          empty=replaceAt(empty, currentWord.toLowerCase().indexOf(letter)*2, letter);
          currentWord=replaceAt(currentWord, currentWord.toLowerCase().indexOf(letter), ' ');
          console.log(empty);
          document.getElementById("line").innerHTML = empty;
        }

      })
    }
  }



  mapThroughLetters = (letter) => {
    return (
      <div className="letters"><div className="letterButtons">{letter}</div></div>
    )
  }
  createWord = () => {
    var word = ""
    var randindex = Math.floor(Math.random() * movies.length)
    currentWord = movies[randindex]
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
        <h1 id="line" style={{whiteSpace: "pre", fontSize: 80}}>{word}</h1>
        <h1>{movies[randindex]}</h1>
      </div>
    )
  }

  render () {
    return (
      <div style={{textAlign: "center"}}>
        <AppHeader />
        <h1>Movies</h1>
        <Images />
        <div className="letterbox">
        {wordList.map(this.mapThroughLetters)}
      </div>
        {this.createWord()}
      </div>
    );
  }
}
