import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Toggle = props => {
  const { labels, text, type, onChange, value } = props;
  return (
    <div className={styles.toggle}>
      <span className={styles.label}> {text} </span>
      <div className={styles.body}>
        <input
          id={'toggle-' + labels[0]}
          className={styles.item_left}
          name={type + 'Toggle'}
          type="radio"
          value={labels[0].toLowerCase()}
          defaultChecked={labels[0] === value}
          onChange={onChange}
        />
        <label htmlFor={'toggle-' + labels[0]} className={styles.btn}>
          {labels[0]}
        </label>
        <input
          id={'toggle-' + labels[1]}
          className={styles.item_right}
          name={type + 'Toggle'}
          value={labels[1].toLowerCase()}
          type="radio"
          defaultChecked={labels[0] !== value}
          onChange={onChange}
        />
        <label htmlFor={'toggle-' + labels[1]} className={styles.btn}>
          {labels[1]}
        </label>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  labels: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Toggle;
