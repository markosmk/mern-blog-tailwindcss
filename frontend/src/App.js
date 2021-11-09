import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList';
import NotFound from './pages/NotFound';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <Navbar />
        <div className="max-w-screen-xl mx-auto pt-20 px-4">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category" element={<Category />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
