import React from 'react';

function Banner() {
  return (
    <div className="h-[30vh] md:h-[80vh] bg-cover bg-center flex items-end" 
      style={{ 
        backgroundImage: `url('https://images3.alphacoders.com/819/thumb-1920-819478.jpg')`,
      }}>
      <div className="text-white text-xl bg-gray-900 text-center w-full p-2">
        Guardians of the Galaxy Vol.2
      </div>
    </div>
  );
}

export default Banner;
