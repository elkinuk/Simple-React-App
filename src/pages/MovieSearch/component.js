import React from 'react';

import { SubHeader } from './../../shared';
import MoviesList from './../../components/MoviesList';

import { getMovies } from './utils.js';

function MovieSearch() {
  const allMovies = getMovies();

    return (
      <>
        <div>Search form</div>
        <SubHeader>
          <span>{allMovies.length + ' films are found'}</span>
        </SubHeader>
        <MoviesList movies={allMovies} />
      </>
    );
}

export default MovieSearch;
