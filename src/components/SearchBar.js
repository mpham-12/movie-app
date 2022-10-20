import * as React from 'react';
import { Button, Input, InputLabel, InputAdornment, FormControl, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Find a Movie
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button variant="outlined">
          Search
        </Button>
      </FormControl>
    </Box>
  );
}

export default SearchBar;