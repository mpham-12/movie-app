import SearchBar from "./SearchBar";
import GenresDrawer from "./GenresDrawer";

import TrendingMovies from './TrendingMovies';
import NowPlayingMovies from "./NowPlayingMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import SearchResults from "./SearchResults";
import { useState } from "react";

const Home = () => {
const [searchResults, setSearchResults] = useState(false);

const searchMovie = () => {
  setSearchResults(true);
  console.log(true)
}
const closeSearchResults = () => {
  setSearchResults(false);
  console.log(true)
}

  return (
    <div>
      <h1>PluggedIn</h1>
      {searchResults && <SearchResults onClose={closeSearchResults}/>}
      <GenresDrawer />
      <SearchBar onSearch={searchMovie}/>
      <TrendingMovies />
      <TopRatedMovies/>
      <NowPlayingMovies />
      <UpcomingMovies/>
    </div>
  );
}

export default Home;