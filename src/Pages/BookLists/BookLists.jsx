import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToStoredRead/addToStoredRead';
import { getStoredWishList } from '../../Utility/AddToStoredWishList/addToStoredWishList';
import ReadList from '../../components/ReadList/ReadList';
import WishList from '../../components/WishList/WishList';
import { FaChevronDown } from 'react-icons/fa';

const BookLists = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState('');
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedWishList = getStoredWishList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    const storedWishListInt = storedWishList.map(id => parseInt(id));

    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
    const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
    setReadList(readBookList);
    setWishList(wishBookList);
  }, [allBooks])

  const handleSort = sortType => {
    setSort(sortType);

    if (sortType === 'Ratings') {
      const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortReadList);
      setWishList(sortReadList);
    }
    if (sortType === 'number of pages') {
      const sortReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortReadList);
      setWishList(sortReadList);
    }
  }
  return (
    <div className='w-11/12 mx-auto'>
      <article>
        <title>LIBRARY | Listed Books</title>
        <meta name="author" content="Josh" />
        <link rel="author" href="https://twitter.com/joshcstory/" />
        <meta name="keywords" content="" />
      </article>
      <div className='bg-slate-200 mt-3 rounded-2xl'>
        <h2 className='text-2xl md:text-4xl font-bold py-5 text-center'>Books</h2>
      </div>
      <div className='py-5 text-center'>
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] text-white">{
            sort ? `Sort by: ${sort}` : <h2 className='flex items-center gap-3'>Sort by<FaChevronDown></FaChevronDown></h2>
          }</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleSort("Ratings")}><a>Rating</a></li>
            <li onClick={() => handleSort("number of pages")}><a>Number of pages</a></li>
          </ul>
        </details>
      </div>
      <Tabs className="my-10">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {
              readList.map(book => <ReadList book={book} key={book.booId}></ReadList>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {
              wishList.map(book => <WishList book={book} key={book.bookId}></WishList>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookLists;