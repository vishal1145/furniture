import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 12;

const ShopHero = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.products.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = data.products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Helper to render page numbers like: 1 2 3 ... 10
  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className=" px-2 sm:px-4 md:px-8 bg-white py-8 ">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Filter Sidebar */}
      <aside className="w-full lg:w-[30%] min-w-[220px] px-0 md:px-8 lg:px-8 mb-8 lg:mb-0">
        <h2 className="font-semibold text-lg mb-4">Filter Options</h2>
        {/* Category */}
        <div className="border-b pb-6 mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <ul
            className="space-y-1 max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-200"
            style={{ scrollbarColor: "#064e3b #e5e7eb" }}
          >
            {data.filters.categories.map((cat) => (
              <li key={cat}>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-green-900" />
                  <span>{cat}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/* Price */}
        <div className="border-b pb-6 mb-6">
          <h3 className="font-medium mb-2">Price</h3>
          <div className="mb-2 text-sm text-gray-700">
            ${data.filters.price.min}.00 - ${data.filters.price.max}.00
          </div>
          <input type="range" min={data.filters.price.min} max={data.filters.price.max} className="w-full accent-green-900" />

        </div>
        {/* Color */}
        <div className="border-b pb-6 mb-6">
          <h3 className="font-medium mb-2">Color</h3>
          <ul className="space-y-1">
            {data.filters.colors.map((color) => (
              <li key={color}>
                <label className="flex items-center gap-2">
                  <input type="radio" name="color" className="accent-green-900" />
                  <span className={`inline-block w-3 h-3 rounded-full border ${color === "Brown" ? "bg-yellow-900" : color === "Grey" ? "bg-gray-400" : color === "Black" ? "bg-black" : color === "White" ? "bg-white border-gray-400" : color === "Blue" ? "bg-blue-500" : color === "Green" ? "bg-green-900" : ""}`}></span>
                  <span>{color}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/* Materials */}
        <div className="border-b pb-6 mb-6">
          <h3 className="font-medium mb-2">Material</h3>
          <ul className="space-y-1">
            {data.filters.materials.map((material) => (
              <li key={material}>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-green-900" />
                  <span>{material}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/* Availability */}
        <div>
          <h3 className="font-medium mb-2">Availability</h3>
          <ul className="space-y-1">
            {data.filters.availablity.map((option) => (
              <li key={option.label}>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-green-900" />
                  <span>{option.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-[70%] flex-1">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="text-gray-700 text-sm">
            Showing {data.results.showing} of {data.results.total} results
          </div>
          <div className="flex items-center gap-2 px-0 md:px-16">
            <span className="text-gray-700 text-sm">Sort by :</span>
            <select className="border bg-white rounded-full px-2 py-1 text-sm">
              {data.sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Active Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-gray-700 text-sm">Active Filter</span>
          {data.activeFilters.map((filter) => (
            <span key={filter.label} className="bg-yellow-500 text-black rounded-full text-xs px-2 p-1 flex items-center gap-1">
              {filter.label} <span className="ml-1 cursor-pointer">&times;</span>
            </span>
          ))}
          <button className="text-green-900 text-sm underline ml-2">Clear All</button>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {paginatedProducts.map((product, idx) => (
            <Link
              key={product.id}
              to={`/shop/${product.type.toLowerCase()}/product-details`}
              className="bg-white rounded-xl shadow-sm relative group transition-all duration-200 hover:shadow-md cursor-pointer"
            >
              {/* Discount badge */}
              <span className="absolute top-4 left-3 bg-green-900 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {product.discount}
              </span>
              {/* Wishlist/expand/bag icons - Show on ALL cards */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button 
                  className="bg-white p-1 rounded-full shadow-md hover:bg-gray-50"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="far fa-heart text-gray-600 text-sm"></i>
                </button>
                <button 
                  className="bg-white p-1 rounded-full shadow-md hover:bg-gray-50"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-expand text-gray-600 text-sm"></i>
                </button>
                <button 
                  className="bg-white p-1 rounded-full shadow-md hover:bg-gray-50"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-lock text-gray-600 text-sm"></i>
                </button>
              </div>
              {/* Product Image with gray-50 background */}
              <div className="bg-gray-50 rounded-lg flex items-center justify-center mb-2 w-full h-36">
                <img src={product.image} alt={product.name} className="object-contain max-h-32" />
              </div>
              <div className="flex items-center justify-between px-2 text-xs text-gray-500">
                <span className="text-gray-400 text-xs">
                  {product.type}
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-yellow-500 text-base">★</span>
                  <span className="text-gray-700 font-semibold">{product.rating}</span>
                </span>
              </div>
              <div className="text-0B1B2B text-sm text-semibold px-2 ">{product.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-0B1B2B text-sm font-medium px-2 mb-2 ">${product.price}.00</span>
                <span className="text-gray-400 line-through text-sm">${product.oldPrice}.00</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10 select-none">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-2xl text-gray-700 disabled:text-gray-300 bg-transparent border-none"
            style={{ background: 'none' }}
          >
            &lt;
          </button>
          {/* Static Page Numbers */}
          {['1', '2', '3', '4', '...', '10'].map((page, idx) =>
            page === '...' ? (
              <span key={idx} className="px-2 text-gray-400">...</span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(Number(page))}
                className={`mx-1 ${
                  currentPage === Number(page)
                    ? 'bg-yellow-500 text-black w-8 h-8 rounded-full font-semibold'
                    : 'text-gray-700'
                }`}
                style={{
                  minWidth: currentPage === Number(page) ? '2.5rem' : 'auto',
                  minHeight: currentPage === Number(page) ? '2.5rem' : 'auto',
                }}
              >
                {page}
              </button>
            )
          )}
          {/* Right Arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-2xl text-gray-700 disabled:text-gray-300 bg-transparent border-none"
            style={{ background: 'none' }}
          >
            &gt;
          </button>
        </div>
      </main>
      </div>
    </div>
  );
};

export default ShopHero;