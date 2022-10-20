import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Genre from "./components/Genre";
import './App.css';



function App() {
  const [genres, setGenres] = useState([]);


  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getGenres = async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

      const data = res.data;
      console.log('GENRES', data.genres)
      setGenres(data.genres);
    }
    getGenres();
  }, [])

  return (
    <Router>
      {genres.map((genre)=>(<Link to={`genres/${genre.name}`}/>))}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/genres/:genre' element={<Genre />} />

      </Routes>
    </Router>
  );
}

export default App;
