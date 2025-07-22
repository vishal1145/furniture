import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm   px-6 sm:px-12 lg:px-32 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-800 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {data.logo.icon}
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              {data.logo.text}<span className="text-yellow-500">{data.logo.accent}</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {data.menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-green-600">{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5 text-gray-700 text-[18px]">
            {/* Search */}
            <button className="hover:text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>

            </button>
             <Link to="/wishlist">
            {/* Wishlist */}
            <button className="hover:text-green-600 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.8 4.6c-1.6-1.5-4.2-1.5-5.8 0l-.9.9-.9-.9c-1.6-1.5-4.2-1.5-5.8 0s-1.6 4 0 5.6l6.7 6.7 6.7-6.7c1.6-1.5 1.6-4.1 0-5.6z"/>
</svg>

            </button>
            </Link>
            {/* Cart */}
           <Link to="/cart">
  <button className="hover:text-green-700 relative mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="21" r="1"></circle>
  <circle cx="20" cy="21" r="1"></circle>
  <path d="M1 1h4l2.6 13.3a1 1 0 001 .7h11.4a1 1 0 001-.8l1.4-7H6"/>
</svg>

  </button>
</Link>
            
            {/* Profile */}
              <Link to="/myaccount">
            <button className="hover:text-green-600">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>

            </button>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-green-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <ul className={`md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col gap-4 mt-4 text-sm font-medium text-gray-700`}>
          {data.menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-green-700 0block">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;