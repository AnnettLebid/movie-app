import React from 'react';

const MovieList = props => {
 
  const FavouriteMovie = props.favouriteMovie;  
    
  return (
    <>
      {props.movies && props.movies.map((movie) => 
        <div key = {movie.imdbID} className = 'image-container d-flex justify-content-start m-3' >
          <img src = {movie.Poster} alt = 'movie' />
          <div 
          onClick = {() => props.handleFavourites(movie)}
          className = 'd-flex overlay align-items-center justify-content-center'>
            <FavouriteMovie />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;