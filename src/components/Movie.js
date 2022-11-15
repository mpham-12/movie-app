import classes from './Movie.module.css'
import MoviePopUp from "../UI/MoviePopUp";
import { useState } from "react";


const Movie = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const movieModal =
    <div>
      {props.title}
      {props.image}
      {props.description}
      {props.rating}
      {props.releaseDate}
    </div>

  return (
    <>
      <div className={classes.movie} onClick={openModal}>
        {/* {props.title} */}
        <img className={classes.movieImg} src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
        {props.rating}
      </div>
      {isModalOpen && <MoviePopUp onCloseModal={closeModal} movieDetails={movieModal} />}
    </>
  );
}

export default Movie;