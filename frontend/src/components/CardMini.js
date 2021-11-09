import React from 'react';
import { Link } from 'react-router-dom';

export default function CardMini({ data }) {
  const { title, slug, image, category } = data;
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <div className="flex">
        <div className="w-24 h-24 mr-4 overflow-hidden relative rounded-xl">
          <Link to={`/blog/${slug}`}>
            <img src={image} alt="" className="w-24 h-24 rounded-xl object-cover" />
          </Link>
        </div>
        <div className="flex-1 flex flex-col">
          <span className="bg-yellow-500 text-white py-1 px-3 text-sm rounded-2xl font-bold capitalize mb-4 inline-flex self-start">
            {category}
          </span>
          <Link to={`/blog/${slug}`} className="font-bold text-lg">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
