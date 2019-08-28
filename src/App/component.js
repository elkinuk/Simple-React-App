import React from 'react';

import styles from './style.module.scss';

function App() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Movie app</span>
      </header>
      <main className={styles.container}> Something </main>
      <footer className={styles.footer}>
        <span className={styles.copyright}>Copyright elkin (c) 2019</span>
      </footer>
    </>
  );
}

export default App;
