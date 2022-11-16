import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Movie from './Movie';
import classes from './Genre.module.css'


const Genre = (props) => {
  const [genreMovies, setGenreMovies] = useState([]);

  const { genreName, genreId } = useParams();


  console.log('params genre', genreName)
  const navigate = useNavigate();

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getFilteredGenres = async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`)
      const data = res.data;
      console.log('NOW PLAYING', data);
      setGenreMovies(data.results);
    }
    getFilteredGenres();
  }, [])

  const goToHomePage = () => {
    return navigate("/");
  }
  return (
    <div>
      <button className={classes.backBtn} onClick={goToHomePage}>
        <span class="material-symbols-outlined">arrow_back</span> Back
      </button>

      <h1>{genreName}: Now Playing</h1>
      <div className={classes.movies}>
        {genreMovies.map((movie) => {
          return <Movie key={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} description={movie.overview} releaseDate={movie.release_date} />
        })}
      </div>
    </div>
  );
}

export default Genre;