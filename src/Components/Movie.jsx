import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Pagenation from './Pagenation';

function Movie({ handleAddToWatchList, handleRemoveWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const pageHandlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const pageHandleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7687785ed83243ae2e5e82239dee43b2&language=en-US&page=${pageNo}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("There was an error fetching the movies!", error);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movieObj) => (
          <MovieCard 
            key={movieObj.id} 
            poster_path={movieObj.poster_path} 
            name={movieObj.original_title} 
            handleAddToWatchList={handleAddToWatchList} 
            handleRemoveWatchList={handleRemoveWatchList} 
            movieObj={movieObj} 
            watchList={watchList} 
          />
        ))}
      </div>
      <Pagenation pageNo={pageNo} pageHandlePrev={pageHandlePrev} pageHandleNext={pageHandleNext} />
    </div>
  );
}

export default Movie;
