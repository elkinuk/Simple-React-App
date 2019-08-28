import React, { Component } from 'react';

import MoviesList from 'components/MoviesList';
import MovieSearchForm from 'components/MovieSearchForm';
import { SubHeader, Toggle } from 'shared';

import { getMovies } from './utils.js';

class MovieSearch extends Component {
  state = {
    movies: [],
    searchValue: '',
    searchToggleValue: 'title',
    sortToggleValue: 'rating',
  };

  _setMovies() {
    const { searchToggleValue, sortToggleValue, searchValue } = this.state;
    const movies = getMovies(searchToggleValue, sortToggleValue, searchValue);

    this.setState({ movies });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchValue !== prevState.searchValue ||
      this.state.searchToggleValue !== prevState.searchToggleValue ||
      this.state.sortToggleValue !== prevState.sortToggleValue
    ) {
      this._setMovies();
    }
  }

  componentDidMount() {
    this._setMovies();
  }

  handleSubmit = (e, searchValue, searchToggleValue) => {
    e.preventDefault();

    this.setState({ searchValue, searchToggleValue });
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    const { searchToggleValue, sortToggleValue, movies } = this.state;

    return (
      <>
        <MovieSearchForm
          handleSubmit={this.handleSubmit}
          searchToggleValue={searchToggleValue}
        />
        <SubHeader>
          <span>{movies.length + ' films are found'}</span>
          <Toggle
            labels={['rating', 'year']}
            type="sort"
            text="Sort by:"
            onChange={this.handleInput}
            value={sortToggleValue}
          />
        </SubHeader>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MovieSearch;
