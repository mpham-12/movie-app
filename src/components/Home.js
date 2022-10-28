import SearchBar from "./SearchBar";
import GenresDrawer from "./GenresDrawer";

import TrendingMovies from './TrendingMovies';
import NowPlayingMovies from "./NowPlayingMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";


const Home = () => {

  return (
    <div>
      <h1>PluggedIn</h1>
      <GenresDrawer />
      <SearchBar/>
      <TrendingMovies />
      <TopRatedMovies/>
      <NowPlayingMovies />
      <UpcomingMovies/>
    </div>
  );
}

export default Home;