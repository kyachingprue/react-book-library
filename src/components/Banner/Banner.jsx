import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-300 w-full md:w-10/12 mx-auto rounded-xl mt-5 min-h-screen">
        <div className="hero-content flex justify-between items-center flex-col lg:flex-row-reverse">
          <div className='max-w-sm object-cover'>
            <img
              src="https://i.ibb.co/YzWwvmz/istockphoto-1481862788-612x612.jpg"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className='ml-0 md:ml-8'>
            <h1 className="text-3xl lg:text-6xl leading-10 md:leading-20 pb-8 font-bold">Books to freshen up your bookshelf</h1>
            <button className="btn btn-accent text-white">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;