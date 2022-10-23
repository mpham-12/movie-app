import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';


const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getMoviesData = async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

      const data = res.data;
      console.log('UPCOMING MOVIES', data.results)
      setMovies(data.results);
    }

    getMoviesData();
  }, []);
  return (
    <div>
      <h2>Coming Soon</h2>
      <div className="moviesList">
        {movies.map((movie) => {
          return <Movie key={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} />
        })}
      </div>
    </div>
  );
}

export default UpcomingMovies;