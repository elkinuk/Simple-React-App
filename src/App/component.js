import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './../shared';
import MovieSearch from './../pages/MovieSearch';
import MovieDetails from './../pages/MovieDetails';
import ErrorBoundary from './../components/ErrorBoundary';

import styles from './style.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path="/" component={MovieSearch} />
              <Route exact path="/:id" component={MovieDetails} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default App;
