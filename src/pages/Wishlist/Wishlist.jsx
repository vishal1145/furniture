import React, { useState, useEffect } from "react";
import wishlistData from "../../data/wishlist.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Features from "../../components/Features";
const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(wishlistData.products);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const [wishlist, setWishlist] = useState([]);
  console.log(wishlist);

  const handleAddCart = (item) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(item)
        ? prevWishlist.filter((itemId) => itemId !==item.id)
        : [...prevWishlist, item]
    );
  };

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <Header data={wishlistData} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-8">Your Wishlist</h2>

        {/* Table Header */}
        <div className="grid grid-cols-[40px_2.5fr_1fr_1.2fr_1fr_120px] items-center text-center font-semibold text-base mb-4 bg-yellow-500 p-3 rounded-lg">
          <span></span>
          <span className="text-left">Product</span>
          <span>Price</span>
          <span>Date Added</span>
          <span>Stock Status</span>
          <span></span>
        </div>

        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[40px_2.5fr_1fr_1.2fr_1fr_120px] items-center py-6 border-b bg-white"
          >
            {/* Remove Button */}
            <div className="flex justify-center items-center">
              <button
                onClick={() => removeItem(item.id)}
                className="text-2xl text-gray-400 hover:text-red-500"
                aria-label="Remove from wishlist"
              >
                ×
              </button>
            </div>
            {/* Product Info */}
            <div className="flex items-center gap-4 text-left">
              <div className="bg-gray-50 rounded-xl flex items-center justify-center w-16 h-16">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">Color : {item.color}</p>
              </div>
            </div>
            {/* Price */}
            <span className="text-gray-900 font-semibold text-center">
              ${item.price.toFixed(2)}
            </span>
            {/* Date Added */}
            <span className="text-gray-900 text-center">{item.dateAdded}</span>
            {/* Stock Status */}
            <span className="text-green-600 font-medium px-10">Instock</span>
            {/* Add to Cart Button */}
            <div className="flex justify-center">
              <button
              onClick={() => handleAddCart(item)} 
                className="bg-green-900 text-white py-2 px-4  rounded-full hover:bg-green-800 transition"
                // onClick={() => alert(`Added ${item.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {/* Wishlist Link and Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 p-6 rounded-lg">
          {/* Wishlist Link Section */}
          <div className="flex items-center gap-4">
            <span className="text-gray-900 underline ">Wishlist link:</span>
            <input
              type="text"
              value="https://www.example.com"
              readOnly
              className="px-4 py-2 border border-gray-300 rounded-full  bg-white text-gray-600 text-sm min-w-64"
            />
            <button className="bg-green-900 text-white px-6 py-2 rounded-full  hover:bg-green-800 transition-colors text-sm font-medium">
              Copy Link
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <button className="text-green-900 underline  hover:text-gray-700 transition-colors">
              Clear Wishlist
            </button>
            <button className="bg-green-900 text-white px-8 py-2 rounded-full  hover:bg-green-800 transition-colors ">
              Add All to Cart
            </button>
          </div>
        </div>
      </div>
      <Features data={furnitureData.features} />
      {/* ✅ Footer */}
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default Wishlist;
