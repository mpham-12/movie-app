import { useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import GenresDrawer from "./GenresDrawer";

import TrendingMovies from './TrendingMovies';
import NowPlayingMovies from "./NowPlayingMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import SearchResults from "./SearchResults";

const Home = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [searchResults, setSearchResults] = useState(false);


  const API_KEY = process.env.REACT_APP_API_KEY;

  const getQuery = async (input) => {
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`);

    const data = res.data;
    console.log('SEARCH RESULTS', data.results)
    setQueryResults(data.results);
    setSearchResults(true);

  }
  const closeSearchResults = () => {
    setSearchResults(false);
  }


  return (
    <div className="App">
      <h1>PluggedIn</h1>
      <GenresDrawer />
      <SearchBar onSearch={getQuery} queryResults={queryResults}/>
      {searchResults && <SearchResults queryResults={queryResults} onClose={closeSearchResults}/>}
      {/* {queryResults && <SearchResults onClose={closeSearchResults} queryResults={queryResults}/>} */}
      <TrendingMovies />
      <TopRatedMovies/>
      <NowPlayingMovies />
      <UpcomingMovies/>
    </div>
  );
}

export default Home;