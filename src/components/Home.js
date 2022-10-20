import axios from 'axios';
import SearchBar from "./SearchBar";
import GenresDrawer from "./GenresDrawer";

const API_KEY = process.env.REACT_APP_API_KEY;
const getMoviesData = async()=>{
const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

const data = res.data;
console.log('DATA', data)
}

const Home = () => {

getMoviesData();
  return (
    <div>
      <h1>PluggedIn</h1>
      <GenresDrawer />
      <SearchBar />
    </div>
  );
}

export default Home;