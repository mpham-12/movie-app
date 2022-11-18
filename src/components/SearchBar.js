import * as React from 'react';
import { useState, useEffect } from 'react';
import classes from './SearchBar.module.css'

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const queryHandler = (e) => {
    setQuery(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.onSearch(query)
    setQuery('');
  }

  return (
    <div className={classes.search}>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="text"
          value={query}
          onChange={queryHandler}
          className={classes.searchBar}
          placeholder='Enter a movie...' />
        <div className={classes.button}>
          <button type='submit' className={classes.searchButton} variant="outlined" >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;