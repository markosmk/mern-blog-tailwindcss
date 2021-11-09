import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full text-center bg-white font-bold text-lg z-20 py-2">
      <ul>
        <li className="inline-flex py-4">
          <Link to="/" className="px-6">
            Home
          </Link>
        </li>
        <li className="inline-flex py-4">
          <Link to="/about" className="px-6">
            About
          </Link>
        </li>
        <li className="inline-flex py-4">
          <Link to="/blog" className="px-6">
            Articles
          </Link>
        </li>
        <li className="inline-flex py-4">
          <Link to="/category" className="px-6">
            Category
          </Link>
        </li>
      </ul>
    </nav>
  );
}
