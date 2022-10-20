import axios from 'axios';
import SearchBar from "./SearchBar";
import GenresDrawer from "./GenresDrawer";
import { useEffect, useState } from 'react';
import Movie from './Movie';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

      const data = res.data;
      console.log('DATA', data)
      setMovies(data.results);
    }

    getMoviesData();
  }, []);


  return (
    <div>
      <h1>PluggedIn</h1>
      <GenresDrawer />
      <SearchBar />

      <h2>Trending Movies</h2>
      {movies.map((movie) => {
        return <Movie key={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} />
      })}
    </div>
  );
}

export default Home;