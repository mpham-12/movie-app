import * as React from 'react';
import { Button, Input, InputLabel, InputAdornment, FormControl, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import classes from './SearchBar.module.css'

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const queryHandler = (e) => {
    setQuery(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('FORMS UBMITTED???')

    props.onSearch(query)
    setQuery('');
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className={classes.search}>
      {/* <Box sx={{ '& > :not(style)': { m: 1 } }} className={classes.search}>
        <FormControl variant="standard" onSubmit={submitHandler} className={classes.form} action="#">
          <InputLabel htmlFor="input-with-icon-adornment"className={classes.label}>
            Find a Movie
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={query}
            onChange={queryHandler}
            className={classes.searchBar}
          />
          <div className={classes.button}>
          <Button type='submit' className={classes.searchButton} variant="outlined" >
            Search
          </Button>
          </div>
        </FormControl>
        
      </Box> */}

      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="text"
          value={query}
          onChange={queryHandler}
          className={classes.searchBar} 
          placeholder='Enter a movie...'/>
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