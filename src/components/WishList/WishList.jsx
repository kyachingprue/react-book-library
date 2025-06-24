import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlinePeople, MdOutlineRequestPage } from 'react-icons/md';
import { Link } from 'react-router-dom';

const WishList = ({ book }) => {
  const { bookId, bookName, author, image, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
  return (
    <div className='bg-slate-100 rounded-xl shadow-blue-300 shadow-2xl my-10'>
      <div className='flex flex-col lg:flex-row gap-3'>
        <div className='bg-slate-300 w-11/12 md:w-52 rounded-xl m-5'>
          <img src={image} className='w-32 m-5 mx-auto' alt="" />
        </div>
        <div className='px-4 md:px-0 py-4 md:py-0'>
          <h2 className='text-xl md:text-3xl font-bold py-3'>{bookName}</h2>
          <p>By:{author}</p>
          <div className='flex flex-col lg:flex-row items-start md:items-center gap-3 md:gap-5 py-2 md:py-4'>
            <h2 className='font-bold text-black'>Tags</h2>
            <div className='flex gap-5 items-center'>
              {
                tags.map((tag, index) => <button key={index} className='bg-slate-200 text-green-600 py-1 font-semibold px-4 rounded-full'>#{tag}</button>)
              }
            </div>
            <div className='flex items-center gap-3'>
              <CiLocationOn />
              <p>
                Year of Publishing:{yearOfPublishing}
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <MdOutlinePeople />
            <p>Publisher:{publisher}</p>
            <p className='flex items-center gap-3'>
              <MdOutlineRequestPage /> Pages {totalPages}
            </p>
          </div>
          <div className='divider'></div>
          <div className='flex gap-3'>
            <button className='bg-[#328EFF]/15 text-blue-800 rounded-full btn'>Category:{category}</button>
            <button className='bg-[#FFAC33]/15 text-[#FFAC33] rounded-full btn'>Rating:{rating}</button>
            <Link to={`/books/${bookId}`}> <button className='bg-[#23BE0A] text-sm text-white btn rounded-full'>View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;