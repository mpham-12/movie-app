import { useEffect, useState } from "react";
import axios from 'axios';
import Movie from "./Movie";


const SearchResults = (props) => {
  const [queryResults, setQueryResults] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log('props', props)
  useEffect(() => {
    const getQuery = async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.queryInput}&page=1&include_adult=false`);

      const data = res.data;
      console.log('SEARCH RESULTS', data.results)
      setQueryResults(data.results);
    }
    getQuery();
  }, [])
  return (
    <div>
      <h2>
        SEARCH RESULTS
        <div className="moviesList">
        {queryResults.map((movie) => {
          return <Movie key={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} />
        })}
        </div>
        <button onClick={props.onClose}> CLOSE</button>
      </h2>
    </div>
  );
}

export default SearchResults;