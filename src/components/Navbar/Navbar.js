import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';

// function Navbar() {

//   return (
//     <nav>
//       <ul>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/menu">Menu</a>
//         <a href="/book">Book</a>
//         <a href="/contact">Contact</a>
//      </ul>
//      </nav>
//   )
// }

const Navbar  = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}


export default Navbar;