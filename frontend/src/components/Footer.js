import { useState } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <footer className="bg-white py-6 mt-12">
      <p className="text-gray-400 text-center">
        © Copyright 2021 MarkosMk, All rights reserved.
      </p>
      <span
        onClick={scrollTop}
        className="fixed bg-purple-500 text-white w-12 h-12 rounded-full z-10 bottom-4 right-11 items-center justify-center cursor-pointer"
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      </span>
    </footer>
  );
}
