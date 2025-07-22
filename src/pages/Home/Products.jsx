import React, { useState, useEffect } from 'react';

const Products = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [timer, setTimer] = useState({ days: 5, hours: 12, minutes: 30, seconds: 25 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        let { days, hours, minutes, seconds } = prevTimer;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-6 sm:px-12 lg:px-32 py-16 mb-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xl text-gray-900">
  <span className="text-yellow-500">—</span> Our Products
</p>

          <h2 className="text-4xl font-medium text-gray-900 mt-2">
            Our <span className="text-green-900">Products Collections</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {data.tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-full px-5 py-2 text-sm ${
                activeTab === index
                  ? 'bg-green-900 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.items.map((product, index) => (
         <div
  key={product.id}
  className="bg-white rounded-xl border shadow-sm p-0 relative w-full overflow-hidden group"
>
  <div className="bg-gray-50 p-4">
    <span className="absolute top-2 left-2 bg-green-900 text-white text-xs px-2 py-1 rounded-xl">
      {product.discount}
    </span>
    {/* Icon group: always rendered, only visible on hover */}
    <div className="absolute top-3 right-3 flex-col gap-2 hidden group-hover:flex">
      <button className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md">
        <i className="far fa-heart text-gray-600 text-base"></i>
      </button>
      <button className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md">
        <i className="fas fa-expand text-gray-600 text-base"></i>
      </button>
      <button className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md">
        <i className="fas fa-lock text-gray-600 text-base"></i>
      </button>
    </div>
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
      {product.hasTimer && (
<div className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-[#0B1B2B] text-[10px] font-semibold flex justify-center gap-3 py-2 rounded-md">
  <div className="text-center">
    <div className="text-sm">{String(timer.days).padStart(2, '0')}</div>
    <div className="text-gray-700">Days</div>
  </div>

  <span className="text-gray-700 text-sm">:</span>

  <div className="text-center">
    <div className="text-sm">{String(timer.hours).padStart(2, '0')}</div>
    <div className="text-gray-700">Hours</div>
  </div>

  <span className="text-gray-700 text-sm">:</span>

  <div className="text-center">
    <div className="text-sm">{String(timer.minutes).padStart(2, '0')}</div>
    <div className="text-gray-700">Mins</div>
  </div>

  <span className="text-gray-700 text-sm">:</span>

  <div className="text-center">
    <div className="text-sm">{String(timer.seconds).padStart(2, '0')}</div>
    <div className="text-gray-700">Sec</div>
  </div>
</div>


    )}
  </div>
</div>

           <div className="bg-white p-4">
  <div className="flex justify-between items-center mb-1 text-xs text-gray-500">
    <p>{product.category}</p>
    <div className="flex items-center text-yellow-500">
      <i className="fas fa-star mr-1"></i> {product.rating}
    </div>
  </div>
  <h3 className="text-sm font-semibold text-gray-800 mb-1 text-left">{product.name}</h3>
  <div className="flex items-center gap-2">
    <span className="text-sm font-bold text-gray-800">${product.price.toFixed(2)}</span>
    <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
  </div>
</div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 