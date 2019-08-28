import React, { Component } from 'react';

import { SubHeader } from './../../shared';
import MoviesList from './../../components/MoviesList';
import MovieSearchForm from './../../components/MovieSearchForm';

import { getMovies } from './utils.js';

class MovieSearch extends Component {
  state = {
    movies: [],
    searchValue: '',
  };

  _setMovies() {
    const { searchValue } = this.state;
    const movies = getMovies(searchValue);

    this.setState({ movies });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchValue !== prevState.searchValue) {
      this._setMovies();
    }
  }

  componentDidMount() {
    this._setMovies();
  }

  handleSubmit = (e, searchValue) => {
    e.preventDefault();

    this.setState({ searchValue: searchValue });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <MovieSearchForm handleSubmit={this.handleSubmit}/>
        <SubHeader>
          <span>{movies.length + ' films are found'}</span>
        </SubHeader>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MovieSearch;
