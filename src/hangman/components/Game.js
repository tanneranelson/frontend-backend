import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';
import Background from './background.svg';


export const Game = props => (
      <div>
        {props.children}
      </div>
);
