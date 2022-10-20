import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Genre = (props) => {
  const { genre } = useParams();
  console.log('params genre', genre)
  const navigate = useNavigate();

  const goToHomePage = () => {
    return navigate("/");
  }
  return (
    <div>
      <button onClick={goToHomePage}>BACK</button>
      <h1>MOVIE GENRE: {genre}</h1>
    </div>
  );
}

export default Genre;