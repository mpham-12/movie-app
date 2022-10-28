import classes from './Movie.module.css'

const Movie = (props) => {
  return ( 
    <div className={classes.movie}>
      {/* {props.title} */}
      <img className={classes.movieImg} src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
      {props.rating}
    </div>
   );
}
 
export default Movie;