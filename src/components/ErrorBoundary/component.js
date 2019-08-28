import React, { Component } from 'react';

import styles from './style.scss';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorName: '',
    componentStack: '',
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorName: error.toString(),
      componentStack: info.componentStack,
    });
  }

  render() {
    const { errorName, componentStack, hasError } = this.state;
    const formattedComponentStack = (componentStack + '').trim().split('\n');

    return hasError ? (
      <div className={styles.error}>
        <h1 className={styles.title}>Oops! An error occured!</h1>
        <h2 className={styles.subtitle}>Here is what we know:</h2>
        <p className={styles.name}>
          <span className={styles.label}>Error:</span>
          <span>{errorName}</span>
        </p>
        <article>
          <h3 className={styles.label}>Stacktrace:</h3>
          {formattedComponentStack.map((el, i) => (
            <p key={'trace' + i} className={styles.stacktrace}>
              {el}
            </p>
          ))}
        </article>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
