import React from 'react';

import MovieCard from './../../components/MovieCard';
import MoviesList from './../../components/MoviesList';
import { SubHeader } from './../../shared';

import { getCurentMovie, getMoviesByGenre } from './utils.js';

const MovieDetails = props => {

    const currentMovie = getCurentMovie(props.match.params.id - 1);
    const moviesByGenre = getMoviesByGenre(currentMovie.genre);

    return (
      <>
        <MovieCard {...currentMovie} />
        <SubHeader>
          <span>Films by {currentMovie.genre} genre</span>
        </SubHeader>
        <MoviesList movies={moviesByGenre} />
      </>
    );
}

export default MovieDetails;
