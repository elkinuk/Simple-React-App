import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from './../../shared';

import styles from './style.module.scss';

const MovieCard = props => {
  const { title, description, year, genre, picLink, rating, duration } = props;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <img className={styles.img} src={picLink} height="400" alt={title}/>
        </div>
        <div className={styles.body}>
          <div className={styles.line}>
            <h2 className={styles.title}>
              {title}
              <span className={styles.rating}> {rating} </span>
            </h2>
          </div>
          <div className={styles.subline}>
            <span className={styles.genre}> {genre} </span>
            <span className={styles.year}> {year} </span>
            <span className={styles.duration}> {duration} </span>
          </div>
          <p className={styles.description}>{description}</p>
          <LinkButton to="/">Back</LinkButton>
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picLink: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default MovieCard;
