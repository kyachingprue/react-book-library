import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  console.log(book);
  const { bookId, image, tags, bookName, author, rating, category } = book;
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-80 mx-auto shadow-2xl mb-20">
          <figure className='m-3 bg-slate-300 w-[295px] h-[166px] rounded-xl'>
            <img
              className='w-24  h-40 py-5'
              src={image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className='flex items-center gap-5'>
              {
                tags.map((tag, index) => <button key={index} className='bg-slate-200 text-green-600 py-1 font-semibold px-4 rounded-full'>{tag}</button>)
              }
            </div>
            <h2 className="py-2 text-2xl font-bold">{bookName}</h2>
            <p>By : {author}</p>
            {/* Dotted Line */}
            <div className="border-t-2 border-dotted border-gray-300 my-2"></div>
            <div className="flex items-center justify-between ">
              <p className='text-start'>{category}</p>
              <div className='flex items-center gap-3'>
                <p className='text-right'>{rating}</p>
                <p className='text-xl'><IoIosStarOutline /></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;