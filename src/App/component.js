import React from 'react';

import { Header, Footer } from './../shared';

import styles from './style.module.scss';
import MovieSearch from './../pages/MovieSearch';

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
          <MovieSearch/>
      </main>
      <Footer />
    </>
  );
}

export default App;
