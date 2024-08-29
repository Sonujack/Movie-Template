import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddToWatchList, handleRemoveWatchList, watchList = [] }) {

  const doesContain = (movieObj) => {
    return watchList.some((movie) => movie.id === movieObj.id);
  };

  return (
    <div 
      className="h-[40vh] w-[180px] m-3 bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end" 
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
    
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveWatchList(movieObj)} className="flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60">
          &#10060;
        </div>
      ) : (
        <div className="flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60">
          <span onClick={() => handleAddToWatchList(movieObj)} className="text-2xl">&#128525;</span>
        </div>
      )}

      <div className="w-full bg-black bg-opacity-60 text-white text-center py-2 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
