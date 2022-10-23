import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Home from './components/Home';
import Genre from "./components/Genre";
import './App.css';



function App() {


    return (
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/genres/:genreId/:genreName' element={<Genre />} />

          </Routes>
        </Router>
    );
  }

  export default App;
