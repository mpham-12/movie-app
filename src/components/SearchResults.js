import Movie from "./Movie";

const SearchResults = (props) => {
  return (
    <div>
      <h2>
        SEARCH RESULTS
      </h2>
      <div className="moviesList">
        {props.queryResults.map((movie) => {
          return <Movie key={movie.id} title={movie.title} rating={movie.vote_average} image={movie.poster_path} description={movie.overview} releaseDate={movie.release_date} />
        })}
      </div>
      <button onClick={props.onClose} className='closeBtn'>CLOSE</button>
    </div>
  );
}

export default SearchResults;