import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';

export const Game = props => (
      <div>
        {props.children}
      </div>
);
