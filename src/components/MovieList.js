import React from 'react';

const MovieList = props => {
  console.log(props)
  return (
    <>
      {props.movies.map((movie) => 
        <div key = {movie.imdbID} className = 'image-container d-flex justify-content-start m-3' >
          <img src = {movie.Poster} alt = 'movie' />
          <div className = 'd-flex overlay align-items-center justify-content-center'></div>
        </div>
      )}
    </>
  );
};

export default MovieList;