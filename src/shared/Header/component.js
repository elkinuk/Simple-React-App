import React from 'react';

import styles from './style.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Movie app</span>
    </header>
  );
};

export default Header;
