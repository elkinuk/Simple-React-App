import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from './../../shared';

import styles from './style.module.scss';

const MoviesListItem = props => {
  const { title, description, year, genre, id, picLink } = props;

  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <h2 className={styles.title}> {title} </h2>
        <span className={styles.year}> {year} </span>
      </div>
      <div className={styles.body}>
        <img className={styles.img} src={picLink} height="400" alt={title}/>
        <span className={styles.genre}> {genre} </span>
        <p className={styles.description}>{description}</p>
        <LinkButton to={`/${id}`}>See more</LinkButton>
      </div>
    </div>
  );
};


MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  picLink: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MoviesListItem;
