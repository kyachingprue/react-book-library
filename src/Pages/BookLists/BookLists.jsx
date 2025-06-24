import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToStoredRead/addToStoredRead';
import { getStoredWishList } from '../../Utility/AddToStoredWishList/addToStoredWishList';
import ReadList from '../../components/ReadList/ReadList';
import WishList from '../../components/WishList/WishList';

const BookLists = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
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
  return (
    <div className='w-11/12 mx-auto'>
      <div className='bg-slate-200 mt-3 rounded-2xl'>
        <h2 className='text-2xl md:text-4xl font-bold py-5 text-center'>Books</h2>
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