import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const getMovies = async (searchValue) => {
    const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;   
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${omdbApiKey}`
    const response = await fetch(url);
    const responseJson = await response.json();    

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }    
  }

  useEffect (() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className = 'container-fluid movie-list'>
      <div className = 'row'>
        <Header header = 'Movies'/>
      </div>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className = 'row'>
        <MovieList movies = {movies}/>
      </div>
    </div>
  );
}

export default App;
