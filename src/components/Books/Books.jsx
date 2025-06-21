import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  return (
    <div className='w-10/12 mx-auto'>
      <h3 className='text-center text-4xl font-bold text-black py-10'>Books: {books.length}</h3>
      <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {
          books.map((book) => <BookCard book={book} key={book.bookId}></BookCard>)
        }
      </div>
    </div>
  );
};

export default Books;