import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'


const Navbar = () => {
  const links = <div className="flex items-center gap-3">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/bookList">Listed Books</NavLink></li>
    <li><NavLink to="/bookChart">Pages to Read</NavLink></li>
  </div>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-72 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-base md:text-3xl">Book Library</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <a className="btn btn-info text-white">Sign In</a>
          <a className="btn btn-accent text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;