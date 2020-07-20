import React from 'react';

import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Movie app</h1>
    </header>
  );
};

export default Header;
