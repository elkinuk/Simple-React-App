import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from './../MoviesListItem';

import styles from './style.module.scss';

const MoviesList = props => {
  const createList = () => {
    const { movies } = props;
    if (movies.length)
      return movies.map((movie, i) => <MovieItem {...movie} key={`${movie.title}_${i}`} />);
    else return <span className={styles.message}> No movies that match your query </span>;
  };

  return <div className={styles.list}>{createList()}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
