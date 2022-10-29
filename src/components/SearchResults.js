import { useEffect, useState } from "react";
import axios from 'axios';
import Movie from "./Movie";


const SearchResults = (props) => {
  return (
    <div>
      <h2>
        SEARCH RESULTS
        <div className="moviesList">
        {props.queryResults.map((movie) => {
          return <Movie key={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} />
        })}
        </div>
        <button onClick={props.onClose}> CLOSE</button>
      </h2>
    </div>
  );
}

export default SearchResults;