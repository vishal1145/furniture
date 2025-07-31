import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaTimes } from 'react-icons/fa';
import shopData from '../data/shop.json';
import relatedProducts from '../data/relatedProduct.json';

const Navbar = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the cart page
  const isCartPage = location.pathname === '/cart';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Get all products from shop.json
  const allProducts = useMemo(() => {
    return [
      ...(shopData.products || []),
      ...(relatedProducts || [])
    ];
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Show only first 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, allProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/shop', { 
        state: { 
          searchQuery: searchQuery.trim(),
          openSearch: true 
        } 
      });
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    navigate('/shop', { 
      state: { 
        searchQuery: suggestion.name,
        openSearch: true 
      } 
    });
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get wishlist and cart count from localStorage
  useEffect(() => {
    const updateCounts = () => {
      // Update wishlist count
      const savedWishlist = localStorage.getItem('wishlist');
      const wishlistItems = savedWishlist ? JSON.parse(savedWishlist) : [];
      setWishlistCount(wishlistItems.length);

      // Update cart count - count unique products only
      const savedCart = localStorage.getItem('cart');
      const cartItems = savedCart ? JSON.parse(savedCart) : [];
      
      // Count unique products (not total quantity)
      const uniqueProductCount = cartItems.length;
      setCartCount(uniqueProductCount);
    };

    // Initial counts
    updateCounts();

    // Listen for storage changes (when wishlist/cart is updated from other components)
    const handleStorageChange = (e) => {
      if (e.key === 'wishlist' || e.key === 'cart') {
        updateCounts();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (for same-tab updates)
    const handleWishlistUpdate = () => {
      updateCounts();
    };
    
    const handleCartUpdate = () => {
      updateCounts();
    };
    
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm px-6 sm:px-12 lg:px-32 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logofuni.png"
                alt="Logo"
                className="w-37 h-37 object-contain"
              />
            </div>
            <h1 className="text-3xl font-semibold text-gray-700">
              {data.logo.text}<span className="text-yellow-500">{data.logo.accent}</span>
            </h1>
          </div>

          {/* Search Input Field */}
          <div className="hidden md:block flex-1 max-w-md mx-8 search-container relative">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                onFocus={() => setShowSuggestions(true)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={14} />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs hover:bg-green-700 transition-colors"
              >
                Search
              </button>
            </form>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                  >
                    <img 
                      src={suggestion.image} 
                      alt={suggestion.name}
                      className="w-10 h-10 object-contain rounded"
                      onError={(e) => {
                        e.target.src = '/images/chair2.png';
                      }}
                    />
                    <div>
                      <div className="font-medium text-gray-900">{suggestion.name}</div>
                      <div className="text-sm text-gray-500">{suggestion.type} • ${suggestion.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5 text-gray-700 text-[18px]">
            {/* Search (Mobile) */}
            <button className="md:hidden hover:text-green-600" onClick={() => navigate('/shop', { state: { openSearch: true } })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <Link to="/wishlist">
              {/* Wishlist */}
              <button className="hover:text-green-600 mt-2 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </Link>
            
            {/* Cart */}
            <Link to="/cart">
              <button className="hover:text-green-700 relative mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.6 13.3a1 1 0 001 .7h11.4a1 1 0 001-.8l1.4-7H6"/>
                </svg>
                {/* Only show cart count when NOT on cart page */}
                {cartCount > 0 && !isCartPage && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
            
            {/* Profile */}
            <Link to="/myaccount">
              <button className="hover:text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <a href={item.href} className="hover:text-green-700 block">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;