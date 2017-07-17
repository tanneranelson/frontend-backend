import React from 'react';
import { Route, IndexRoute } from 'react-router';
import{ Game } from './hangman/components/Game';
import{ Movies } from './hangman/components/Movies';
import{ Food } from './hangman/components/Food';
import{ Videogames } from './hangman/components/Videogames';
export default (
  <Route path="/" component={Game}>
    <Route path="/movies" component={Movies} />
    <Route path="/food" component={Food} />
    <Route path="/videogames" component={Videogames} />
  </Route>
)
