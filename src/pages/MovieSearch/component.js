import React, { Component } from 'react';

import { SubHeader } from './../../shared';
import MoviesList from './../../components/MoviesList';
import MovieSearchForm from './../../components/MovieSearchForm';

import { getMovies } from './utils.js';

class MovieSearch extends Component {
  state = {
    searchValue: '',
  };

  handleSubmit = (e, searchValue) => {
    e.preventDefault();

    this.setState({ searchValue: searchValue });
  };

  render() {
    const { searchValue } = this.state;
    const allMovies = getMovies(searchValue);

    return (
      <>
        <MovieSearchForm handleSubmit={this.handleSubmit}/>
        <SubHeader>
          <span>{allMovies.length + ' films are found'}</span>
        </SubHeader>
        <MoviesList movies={allMovies} />
      </>
    );
  }
}

export default MovieSearch;
