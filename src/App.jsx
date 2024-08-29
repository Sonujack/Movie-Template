import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Movie from './Components/Movie';
import WatchList from './Components/WatchList';
import Banner from './Components/Banner';

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    const newWatchList = [...watchList, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveWatchList = (movieObj) => {
    const filterWatchList = watchList.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchList));
    setWatchList(filterWatchList);
  };

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Movie watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveWatchList={handleRemoveWatchList} /></>} />
          <Route path="/watchList" element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveWatchList={handleRemoveWatchList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
