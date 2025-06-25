import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/AddToStoredRead/addToStoredRead';
import { addToStoredWishList } from '../../Utility/AddToStoredWishList/addToStoredWishList';

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData()
  console.log("loaded data", data);
  const id = parseInt(bookId);
  const bookData = data.find(book => book.bookId === id)
  const { bookId: newId, image, author, bookName, review, tags, publisher, yearOfPublishing, rating, totalPages, category } = bookData;


  const handleMarkAsRead = (id) => {
    // read list add to localStorage
    addToStoredReadList(id)
  }

  const handleMarkAsWishList = (id) => {
    // wish list add to localStorage
    addToStoredWishList(id)
  }

  return (
    <div>
      <article>
        <title>LIBRARY | {newId}</title>
        <meta name="author" content="Josh" />
        <link rel="author" href="https://twitter.com/joshcstory/" />
        <meta name="keywords" content="" />
      </article>
      <div className='w-full md:px-0 md:w-10/12 min-h-screen mx-auto flex-col md:flex-row md:flex items-center bg-slate-100 rounded-xl my-10'>
        <div className='md:flex-1/2 mb-10 md:mb-0 bg-slate-200 rounded-xl'>
          <img className='w-80 mx-auto py-10 md:py-32' src={image} alt="" />
        </div>
        <div className='md:flex-1/2 pl-0 m-8 pb-8 md:pl-12'>
          <h2 className='text-2xl md:text-4xl font-bold'>{bookName}</h2>
          <p className='font-semibold text-xl py-3'>By:{author}</p>
          <p className='text-xl border-y py-3'>{category}</p>
          <p className='text-gray-600 py-3'><span className='text-black font-bold'>Review:</span>{review}</p>
          <div className='flex items-center gap-10 py-3'>
            <h2>Tag</h2>
            <div className='flex gap-5 items-center'>
              {
                tags.map((tag, index) => <button key={index} className='bg-slate-200 text-green-600 py-1 font-semibold px-4 rounded-full'>#{tag}</button>)
              }
            </div>
          </div>
          <div className='flex items-center border-t border-black py-3'>
            <div className='flex-1/2'>
              <p>Number Of Pages:</p>
              <p>Publisher:</p>
              <p>Year Of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className='flex-1/2'>
              <p className='font-bold'>{totalPages}</p>
              <p className='font-bold'>{publisher}</p>
              <p className='font-bold'>{yearOfPublishing}</p>
              <p className='font-bold'>{rating}</p>
            </div>
          </div>
          <div className='flex gap-7'>
            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline btn-accent'>Read</button>
            <button onClick={() => handleMarkAsWishList(bookId)} className='btn btn-accent'>WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;