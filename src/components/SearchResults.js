const SearchResults = (props) => {
  return (
    <div>
      <h2>
        SEARCH RESULTS

        <button onClick={props.onClose}> CLOSE</button>
      </h2>
    </div>
  );
}

export default SearchResults;