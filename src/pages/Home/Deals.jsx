import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Deals = ({ data }) => {
const navigate = useNavigate ();

const openProductDetails = (item) => {
  navigate(`/shop/${item.type}/product-details`);
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
      <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
        <i className="far fa-heart text-sm text-gray-500"></i>
      </button>
      <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
        <i className="fas fa-expand text-sm text-gray-500"></i>
      </button>
      <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
        <i className="fas fa-shopping-bag text-sm text-gray-500"></i>
      </button>
    </div>

    {/* Product Image */}
    <div className="bg-gray-50 rounded-2xl p-4 flex justify-center items-center w-full h-[280px]">
      <img
        src={deal.image}
        alt={deal.name}
        className="w-full h-full object-contain"
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

    <button onClick={() => openProductDetails(deal)}
     className="text-green-900 text-sm font-medium flex items-center gap-1 hover:underline ">
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