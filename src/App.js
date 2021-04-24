import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  
  const getMovies = async (searchValue) => {
    const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;   
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${omdbApiKey}`
    const response = await fetch(url);
    const responseJson = await response.json();    

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }    
  }

  useEffect (() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect (() => {
    const movieFavourites = JSON.parse(localStorage.getItem('movie-app-favourites'));
    if (movieFavourites) {
			setFavourites(movieFavourites)};     
  },[])

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favourites", JSON.stringify(items));    
  }

  const addToFavourites = (movie) => {   

    const newFavouriteList = [ ...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFromFavourites = (movieToRemove) => {    
    const newFavourites = favourites.filter((movie) => movie.imdbID !== movieToRemove.imdbID);
    setFavourites(newFavourites);    
    saveToLocalStorage(newFavourites);
  }
  

  return (   
    <div className = 'container-fluid movie-list'>
      <div className = 'row'>
        <Header header = 'Movies'/>
      </div>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className = 'row'>
        <MovieList movies = {movies} 
        favouriteMovie = {AddFavourites}
        handleFavourites = {addToFavourites}/>
      </div>     
        {favourites && favourites.length > 0 && 
          <div className = 'row'>
          <Header header = 'Favourites'/>
          </div>}
      <div className = 'row'>
        <MovieList movies = {favourites ?  favourites : []}
         favouriteMovie = {RemoveFavourites}
         handleFavourites = {removeFromFavourites}/> 
      </div>
    </div>   
  );
}

export default App;
