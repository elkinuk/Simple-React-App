import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

class MovieSearchForm extends Component {
  state = {
    searchValue: '',
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    const { handleSubmit } = this.props;
    const { searchValue } = this.state;

    return (
      <form className={styles.form} onSubmit={e => handleSubmit(e, searchValue)}>
        <input type="text" name="search" placeholder="Search..." onChange={this.handleInput} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default MovieSearchForm;
