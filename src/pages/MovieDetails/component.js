import React, { Component } from 'react';

import MovieCard from './../../components/MovieCard';
import MoviesList from './../../components/MoviesList';
import { SubHeader } from './../../shared';

import { getCurentMovie, getMoviesByGenre } from './utils.js';

class MovieDetails extends Component {

  state = {
    moviesByGenre: [],
    currentMovie: {},
  };

  _setMovieAndGenre() {
    const currentMovie = getCurentMovie(this.props.match.params.id - 1);
    const moviesByGenre = getMoviesByGenre(currentMovie.genre);

    this.setState({ currentMovie, moviesByGenre });
  }

  componentDidMount() {
    this._setMovieAndGenre();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this._setMovieAndGenre();
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { currentMovie, moviesByGenre } = this.state;

    return (
      <>
        {currentMovie.title ? <MovieCard {...currentMovie} /> : null}
        <SubHeader>
          <span>Films by {currentMovie.genre} genre</span>
        </SubHeader>
        <MoviesList movies={moviesByGenre} />
      </>
    );
  }
}

export default MovieDetails;
