import * as React from 'react';
import { Button, Input, InputLabel, InputAdornment, FormControl, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import classes from './SearchBar.module.css'

const SearchBar = (props) => {
  const [searchResults, setSearchResults] = useState(false);
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    setSearchResults(true);
    console.log('FORMS UBMITTED???')

    setQuery('');
  }

  const queryHandler = (e) => {
    setQuery(e.target.value);
  }

  const closeSearchResults = () => {
    setSearchResults(false);
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div >
      <Box sx={{ '& > :not(style)': { m: 1 } }} className={classes.search}>
        <FormControl variant="standard" onSubmit={submitHandler} className={classes.form}>
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
            onChange={submitHandler}
            className={classes.searchBar}
          />
          <div className={classes.button}>
          <Button className={classes.searchButton} variant="outlined" >
            Search
          </Button>
          </div>
        </FormControl>
        
      </Box>

      {searchResults && <SearchResults onClose={closeSearchResults} queryInput={query} />}
    </div>
  );
}

export default SearchBar;