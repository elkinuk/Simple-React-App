import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

const LinkButton = props => {
  const { to, children } = props;
  return (
    <Link to={to}>
      <span className={styles.link}>{children}</span>
    </Link>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
};
