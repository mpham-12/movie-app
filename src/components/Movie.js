const Movie = (props) => {
  return ( 
    <div>
      {props.title}
      <img src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
      {props.rating}
    </div>
   );
}
 
export default Movie;