import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Toggle } from './../../shared';

import styles from './style.module.scss';

class MovieSearchForm extends Component {
  state = {
    searchValue: '',
    searchToggleValue: this.props.searchToggleValue,
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    searchToggleValue: PropTypes.string.isRequired,
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    const { handleSubmit } = this.props;
    const { searchValue, searchToggleValue } = this.state;

    return (
      <form className={styles.form} onSubmit={e => handleSubmit(e, searchValue, searchToggleValue)}>
        <label htmlFor="searchMovie" className="hidden">Search movie</label>
        <input id="searchMovie" type="text" name="search" placeholder="Search..." onChange={this.handleInput} />
        <Toggle
          labels={['title', 'genre']}
          type="search"
          text="Search by:"
          onChange={this.handleInput}
          value={searchToggleValue}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default MovieSearchForm;
