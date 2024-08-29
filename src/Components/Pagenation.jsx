import React from 'react';

function Pagenation({ pageNo, pageHandlePrev, pageHandleNext }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div onClick={pageHandlePrev} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <h1 className="font-bold">{pageNo}</h1>
      <div onClick={pageHandleNext} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagenation;
