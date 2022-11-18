import classes from './MoviePopUp.module.css'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
    </div>
  )
}

const MovieOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
}

const portalElement = document.getElementById('overlays');

const MoviePopUp = (props) => {
  return (
    <div className={classes.popup}>
      {ReactDOM.createPortal(<BackDrop onClose={props.onCloseModal} />, portalElement)}
      {ReactDOM.createPortal(<MovieOverlay>{props.movieDetails}</MovieOverlay>, portalElement)}
    </div>
  );
}

export default MoviePopUp;