import SearchBar from "./SearchBar";
import GenresDrawer from "./GenresDrawer";

import TrendingMovies from './TrendingMovies';

const Home = () => {

  return (
    <div>
      <h1>PluggedIn</h1>
      <GenresDrawer />
      <SearchBar />

<TrendingMovies/>
    </div>
  );
}

export default Home;