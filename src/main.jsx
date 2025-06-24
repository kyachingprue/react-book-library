import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout/MainLayout';
import ErrorPage from './Pages/Error/ErrorPage';
import Home from './Pages/Home/Home';
import BookLists from './Pages/BookLists/BookLists';
import BookChart from './Pages/BookChart/BookChart';
import BookDetails from './components/BookDetails/BookDetails';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/bookList',
        element: <BookLists></BookLists>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/bookChart',
        element: <BookChart></BookChart>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
