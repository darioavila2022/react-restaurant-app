import React from 'react';
import './navbar.css';
// import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav>
      <ul>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/book">Book</a>
        <a href="/contact">Contact</a>

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/book">Book</Link>
        <Link to="/contact">Contact</Link> */}

      </ul>
    </nav>
  );
}

export default Navbar;