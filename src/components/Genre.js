import { useParams } from "react-router-dom";


const Genre = (props) => {
  const { genre } = useParams();
console.log('params genre',genre)
  return ( 
    <div>
      <h1>MOVIE GENRE: {genre}</h1>
    </div>
   );
}
 
export default Genre;