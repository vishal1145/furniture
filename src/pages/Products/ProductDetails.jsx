import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productData from '../../data/productDetails.json';

import RelatedProducts from '../../components/RelatedProducts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import furnitureData from '../../data/furnitureData.json'; 
import Header from '../../components/Header';
import shopData from '../../data/shop.json';
import { FaStar, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaCheckCircle } from "react-icons/fa"; // For check icon, or use your own SVG
import Features from '../../components/Features';

const TABS = [
  { label: "Description" },
  { label: "Additional Information" },
  { label: "Review" },
];

const descriptionList = [
  "100% Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Ut at nunc vel nisi gravida dictum.",
  "Donec non velit sed risus tincidunt susc  import RelatedProducts from '../../components/RelatedProducts';ipit.",
  "Cras laoreet lacus in dui posuere fringilla.",
];

const reviews = [
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Kristin Watson",
    verified: true,
    date: "1 month ago",
    title: "Ultimate Comfort and Support - A Gamer's Dream Chair!",
    text: "I've been using this gaming chair for a few weeks now, and I have to say, it's been a game-changer for me. The comfort level is off the charts, and I no longer feel sore after long gaming sessions. Definitely worth the investment!",
    rating: 5,
    images: [
      { url: "/images/chair7.png", isVideo: true },
      { url: "/images/chair7.png", isVideo: false },
      { url: "/images/chair7.png", isVideo: false },
    ],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Darlene Robertson",
    verified: true,
    date: "2 month ago",
    title: "Amazing Product, Awesome!",
    text: "As someone who spends a lot of time at my computer, having a comfortable chair is essential. This gaming chair not only meets but exceeds my expectations. It's comfortable, supportive, and looks great in my setup. 10/10 would recommend!",
    rating: 5,
    images: [],
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jerome Bell",
    verified: true,
    date: "2 month ago",
    title: "Amazing Product, Awesome!",
    text: "As someone who spends a lot of time at my computer, having a comfortable chair is essential. This gaming chair not only meets but exceeds my expectations. It's comfortable, supportive, and looks great in my setup. 10/10 would recommend!",
    rating: 5,
    images: [],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(productData.selectedColor);
  const [quantity, setQuantity] = useState(productData.quantity);
  const [selectedImage, setSelectedImage] = useState(productData.images?.[0] || productData.image);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar data={furnitureData.navigation} />
      <Header data={productData} />
      {/* ✅ Main Product Content */}
      <div className="bg-white  flex items-center justify-center py-8 px-2">
        <div className="max-w-7xl w-full bg-white rounded-2xl  p-6 flex flex-col md:flex-row gap-10">
          {/* Image & Arrows */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <div className="flex items-center gap-4">
            
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center">
                  <button className="bg-green-900 text-white w-12 h-12 rounded-md flex items-center justify-center text-2xl">
                &#60;
              </button>
                <img
                  src={selectedImage}
                  alt={productData.title}
                  className="w-[600px] h-[500px] object-contain"
                />
                 <button className="bg-yellow-500 text-white w-12 h-12 rounded-md flex items-center justify-center text-2xl">
                &#62;
              </button>
              </div>
             
            </div>
            {/* --- Gallery Thumbnails ---   import RelatedProducts from '../../components/RelatedProducts';*/}
            <div className="flex gap-4 mt-6">
              {productData.images?.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className="
                    rounded-xl p-1 transition-all
                    border-2 border-transparent bg-gray-50 hover:border-green-900
                  "
                  style={{ outline: 'none' }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-24 h-24 object-contain rounded-xl"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-gray-900 text-xl mb-1">{productData.type}</span>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-medium text-gray-900">{productData.producttitle}</h2>
              {productData.inStock && (
               <span className="ml-2 bg-green-100 text-green-900 text-sm px-4 py-1 border border-green-300 rounded-full font-semibold">
  In Stock
</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-500 text-2xl flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>
              <span className=" text-xl   text-gray-900">{productData.rating}</span>
              <span className="text-gray-900 text-xl">({productData.reviewCount} Review)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-2">
              <span className="text-2xl font-bold text-gray-900">${productData.price.toFixed(2)}</span>
              <span className="text-gray-400 line-through text-lg">${productData.oldPrice.toFixed(2)}</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-xl mt-2">{productData.description}</p>

            {/* Color */}
            <div className="flex items-center gap-2 mt-4">
              <span className="font-semibold text-gray-900">Color :</span>
              {productData.colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-green-700' : 'border-gray-300'} mx-1`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center gap-4 mt-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden h-12 min-w-[144px] bg-white">
                <button
                  className="w-12 h-12 flex items-center justify-center text-2xl text-gray-700 focus:outline-none"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  type="button"
                >
                  –
                </button>
                <div className="w-12 h-12 flex items-center justify-center text-lg font-medium border-l border-r border-gray-300 select-none">
                  {quantity}
                </div>
                <button
                  className="w-12 h-12 flex items-center justify-center text-2xl text-gray-700 focus:outline-none"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                  type="button"
                >
                  +
                </button>
              </div>

              {/* Action Buttons */}
              <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full  text-base shadow transition">
                Add To Cart
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-base shadow transition">
                Buy Now
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <i className="far fa-heart text-gray-600 text-lg"></i>
              </button>
            </div>

            {/* SKU, Tags, Share */}
            <div className="mt-6 text-sm text-gray-700">
              <div className="mb-1">SKU : <span className="font-semibold">{productData.sku}</span></div>
              <div className="mb-1">
                Tags : {productData.tags.map((tag, idx) => (
                  <span key={tag} className="inline-block mr-1">{tag}{idx < productData.tags.length - 1 ? ',' : ''}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2 ">
                <span>Share :</span>
                <a
                  href="#"
                  className="bg-green-800 text-white hover:bg-green-900 rounded-full w-7 h-7 flex items-center justify-center shadow transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-green-800 text-white hover:bg-green-900 rounded-full  w-7 h-7 flex items-center justify-center shadow transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-green-800 text-white hover:bg-green-900 rounded-full w-7 h-7 flex items-center justify-center shadow transition"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#"
                  className="bg-green-800 text-white hover:bg-green-900 rounded-full w-7 h-7 flex items-center justify-center shadow transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Product Tabs Section --- */}
      <div className="max-w-7xl mx-auto  bg-white rounded-xl shadow-sm p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 justify-center">
          {TABS.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 text-lg font-medium focus:outline-none transition
                ${activeTab === idx
                  ? "text-green-900 border-b-4 border-green-900"
                  : "text-gray-400 border-b-4 border-transparent hover:text-green-900"}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pt-6 justify-center">
          {activeTab === 0 && (
            <>
              <p className="text-gray-700 mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <ul className="space-y-2 mt-4">
                {descriptionList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    {/* Custom yellow/green dot */}
                    <span className="w-5 h-5 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-green-900"></span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeTab === 1 && (
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-200 rounded-2xl overflow-hidden">
                <thead>
                  <tr>
                    <th className="bg-yellow-500 text-left px-6 py-3 text-base font-semibold rounded-tl-2xl">
                      Feature
                    </th>
                    <th className="bg-yellow-500 text-left px-6 py-3 text-base font-semibold rounded-tr-2xl">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border-t border-gray-200">Seat Material</td>
                    <td className="px-6 py-3 border-t border-gray-200">Leather</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border-t border-gray-200">Color</td>
                    <td className="px-6 py-3 border-t border-gray-200">Black, Brown, Grey, Green, Blue</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border-t border-gray-200">Item Weight</td>
                    <td className="px-6 py-3 border-t border-gray-200">25 Kilograms</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border-t border-gray-200">Dimensions</td>
                    <td className="px-6 py-3 border-t border-gray-200">21"D x 21"W x 48"H</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border-t border-b border-gray-200 rounded-bl-2xl">Brand</td>
                    <td className="px-6 py-3 border-t border-b border-gray-200 rounded-br-2xl">KD Design</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 2 && (
            <div className="pt-2">
              {/* Rating Summary */}
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                {/* Left: Average Rating */}
                <div className="flex flex-col items-center md:w-1/3 w-full">
                  <span className="text-5xl font-bold text-gray-900">4.9</span>
                  <span className="text-gray-500 text-lg">out of 5</span>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm mt-1">(245 Review)</span>
                </div>
                {/* Right: Bar Chart */}
                <div className="flex-1 w-full">
                  {[5, 4, 3, 2, 1].map((star, idx) => {
                    // Dummy data for bar lengths
                    const barPercents = [90, 60, 25, 10, 5];
                    return (
                      <div key={star} className="flex items-center gap-2 mb-2">
                        <span className="w-12 text-gray-700 text-sm">{star} Star</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-2 bg-yellow-500 rounded-full"
                            style={{ width: `${barPercents[idx]}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

           

              {/* Review List Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <div>
                  <span className="font-semibold text-gray-900">Review List</span>
                  <div className="text-gray-500 text-sm mt-1">Showing 1-4 of 24 results</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 text-sm">Sort by :</span>
                  <select className="border bg-white rounded-full px-3 py-1 text-sm">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Highest</option>
                    <option>Lowest</option>
                  </select>
                </div>
              </div>

              {/* Review List */}
              {reviews.map((review, idx) => (
                <div key={idx} className="py-8 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex flex-col items-start">
                          <span className="font-semibold text-gray-900">{review.name}</span>
                          {review.verified && (
                            <span className="text-gray-500 text-xs mt-1">(Verified)</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm min-w-max mt-2 md:mt-0">{review.date}</div>
                  </div>
                  {(review.title || review.text) && (
                    <div className="mt-3">
                      {review.title && (
                        <div className="font-semibold text-gray-900 text-base mb-1">
                          {review.title}
                        </div>
                      )}
                      {review.text && (
                        <div className="text-gray-700 mb-2">
                          {review.text}
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-base" />
                          ))}
                        </div>
                        <span className="text-gray-900 font-semibold text-base">{review.rating}.0</span>
                      </div>
                      {/* Attached Images/Video */}
                      {review.images && review.images.length > 0 && (
                        <div className="flex gap-6 mt-4">
                          {review.images.map((img, i) => (
                            <div
                              key={img.url}
                              className="relative bg-gray-50 rounded-xl flex items-center justify-center w-32 h-32"
                            >
                              <img
                                src={img.url}
                                alt={`Review product ${i + 1}`}
                                className="object-contain w-24 h-24"
                              />
                              {img.isVideo && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                  {/* Play icon */}
                                  <svg
                                    className="w-10 h-10 text-white bg-black bg-opacity-50 rounded-full p-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.4" />
                                    <polygon points="10,8 16,12 10,16" fill="#fff" />
                                  </svg>
                                </span>
                              )}
                            </div>
                       
                          ))}
                        </div>
                      )}

                      
                    </div>
                  )}
                </div>
              ))}

              {/* Add your review section */}
              <div className="bg-white rounded-xl shadow-sm mt-10 max-w-7xl mx-auto ">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">Add your review</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Your email address will not be published. Required fields are marked<span className="text-red-500">*</span>
                </p>
                <form className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <label className="block text-gray-900 font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ex. John Doe"
                        className="w-full border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-900 transition text-base"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-900 font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-900 transition text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Your Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-2xl">★</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Add Review Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Write Title here"
                      className="w-full border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-900 transition text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Add Detailed Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Write here"
                      rows={4}
                      className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-900 transition resize-none text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Photo / Video <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div
                      className="w-full border border-gray-200 rounded-2xl flex flex-col items-center justify-center py-10 cursor-pointer transition hover:border-green-900"
                      style={{ minHeight: 120 }}
                    >
                      <span className="text-4xl mb-2 text-gray-400">
                        {/* Simple image+ icon SVG */}
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="8.5" cy="12.5" r="1.5" fill="currentColor" opacity="0.2" />
                          <path d="M21 15l-5-5-4 4-2-2-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M16 7.5v3m1.5-1.5h-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span className="text-gray-500 text-base">Drag a Photo or Video</span>
                      <label className="text-green-900 font-semibold cursor-pointer mt-1">
                        <span>Browse</span>
                        <input type="file" className="hidden" multiple />
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full font-semibold text-base shadow transition"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
        
      </div>
 <RelatedProducts />
 <Features data={furnitureData.features}/>
      {/* ✅ Footer */}
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default ProductDetails;
