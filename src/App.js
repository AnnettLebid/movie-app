import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';

const App = () => {
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;   
    const url = `http://www.omdbapi.com/?s=star wars&apikey=${omdbApiKey}`
    const response = await fetch(url);
    const responseJson = await response.json();    
    setMovies(responseJson.Search)
  }

  useEffect (() => {
    getMovies();
  }, []);

  return (
    <div className = 'container-fluid movie-list'>
      <div className = 'row'>
        <Header header = 'Movies'/>
      </div>
      <div className = 'row'>
        <MovieList movies = {movies}/>
      </div>
    </div>
  );
}

export default App;
