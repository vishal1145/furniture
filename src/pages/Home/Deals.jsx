import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Deals = ({ data }) => {
  const navigate = useNavigate();
  
  // Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Initialize cart from localStorage
  const [addCart, setAddCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));
  }, [wishlist]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addCart));
    window.dispatchEvent(new Event('cartUpdated'));
  }, [addCart]);

  const toggleHeart = (deal, e) => {
    e.stopPropagation(); // Prevent card click when clicking heart
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some(item => item.id === deal.id);
      if (isInWishlist) {
        return prevWishlist.filter(item => item.id !== deal.id);
      } else {
        return [...prevWishlist, deal];
      }
    });
  };

  const handleAddCart = (deal, e) => {
    e.stopPropagation(); // Prevent card click when clicking cart
    setAddCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === deal.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item => 
          item.id === deal.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevCart, { ...deal, quantity: 1 }];
      }
    });
    
    // Show success message (you can add a toast notification here)
    console.log(`Added ${deal.name} to cart`);
  };

  const openProductDetails = (item) => {
    // Transform the product data to match what ProductDetails expects
    const transformedProduct = {
      id: item.id,
      name: item.name,
      title: item.name,
      producttitle: item.name,
      type: item.type || item.category,
      price: item.price,
      oldPrice: item.originalPrice,
      rating: item.rating,
      reviewCount: item.reviewCount || 245,
      image: item.image,
      images: item.images || [item.image],
      description: item.description || "Premium quality furniture designed for comfort and style.",
      colors: item.colors || ['#8B4513', '#A0522D', '#FFFFFF'],
      sku: item.sku || `FRNC${item.id}ABC`,
      tags: item.tags || ["Furniture", item.type || item.category || "Chair"],
      inStock: item.inStock !== undefined ? item.inStock : true,
      category: item.category,
      discount: item.discount
    };

    // Store in localStorage for persistence
    localStorage.setItem('currentProduct', JSON.stringify(transformedProduct));
    
    navigate(`/productdetails/${item.id}`, {
      state: { productData: transformedProduct }
    });
  };

  return (
    <section className="px-6 sm:px-12 lg:px-32 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-2  text-left">
          <h2 className="text-3xl font-medium ">
            <span className="text-gray-900 text-xl ">  <span className="text-yellow-500">—</span>{data.subtitle}</span><br />
            <span className="text-green-900 text-4xl font-medium">{data.title.split(' ')[0]}</span> {data.title.split(' ').slice(1).join(' ')}
          </h2>
          <p className="max-w-md text-sm text-gray-500">
            {data.description}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((deal, index) => (
            <div key={deal.id} className="flex rounded-2xl overflow-hidden border shadow-sm w-full max-w-lg bg-white">
              {/* LEFT SIDE - Image */}
              <div className="relative w-1/2 p-2 flex items-center justify-center">
                {/* Discount Badge */}
                <span className="absolute top-4 left-4 bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded-xl">
                  {deal.discount}
                </span>

                {/* Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                  {/* Wishlist Button */}
                  <button 
                    className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
                    onClick={(e) => toggleHeart(deal, e)}
                    title={wishlist.some(item => item.id === deal.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <i className={`${wishlist.some(item => item.id === deal.id) ? "fas" : "far"} fa-heart text-sm transition-all duration-300 ${wishlist.some(item => item.id === deal.id) ? 'text-red-500' : 'text-gray-500'}`}></i>
                  </button>
                  
                  {/* Quick View Button */}
                  <button 
                    className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductDetails(deal);
                    }}
                    title="Quick view"
                  >
                    <i className="fas fa-expand text-sm text-gray-500"></i>
                  </button>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
                    onClick={(e) => handleAddCart(deal, e)}
                    title="Add to cart"
                  >
                    <i className="fas fa-shopping-bag text-sm text-gray-500"></i>
                  </button>
                </div>

                {/* Product Image */}
                <div className="bg-gray-50 rounded-2xl p-4 flex justify-center items-center w-full h-[280px]">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error('Image failed to load:', deal.image);
                      e.target.src = '/images/chair2.png'; // Fallback image
                    }}
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}
              <div className="w-1/2 px-4 p-10 flex flex-col justify-between text-left">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{deal.category}</p>
                  <h3 className="text-base font-semibold text-gray-900 truncate max-w-full">{deal.name}</h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-900 font-semibold text-base">${deal.price.toFixed(2)}</span>
                    <span className="line-through text-gray-400 text-base">${deal.originalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-yellow-500 text-base">★</span>
                    <span className="text-gray-900 text-base font-medium">{deal.rating}</span>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 ">
                    {deal.description}
                  </p>
                </div>

                <button 
                  onClick={() => openProductDetails(deal)}
                  className="text-green-900 text-sm font-medium flex items-center gap-1 hover:underline "
                >
                  Shop Now <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals; 