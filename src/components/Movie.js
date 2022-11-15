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
    <div className={classes.popup}>
      <div>
      <img className={classes.movieImgPopUp} src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
      </div>
      <div className={classes.movieDesc}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3 className={classes.detailHeaders}>Average Rating</h3>
      <p className={classes.rating}>{props.rating}/10</p>
      <h3 className={classes.detailHeaders}>Release Date</h3>
      <p className={classes.releaseDate}>{props.releaseDate}</p>
      </div>
    </div>

  return (
    <>
      <div className={classes.movie} onClick={openModal}>
        {/* {props.title} */}
        <img className={classes.movieImg} src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
      </div>
      {isModalOpen && <MoviePopUp onCloseModal={closeModal} movieDetails={movieModal} />}
    </>
  );
}

export default Movie;