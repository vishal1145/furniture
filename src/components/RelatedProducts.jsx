import React from "react";
import relatedProducts from "../data/relatedProduct.json";

export default function RelatedProduct() {
  return (
    <div className="px-6 sm:px-12 lg:px-32 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-xl text-gray-900 mb-2"><span className="text-yellow-500">—</span> Related Products</p>
        <h2 className="text-4xl font-medium text-gray-900">
          Explore <span className="text-green-900">Related Products</span>
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow group relative hover:shadow-md transition duration-300"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-green-900 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
              {product.discount}
            </span>

            {/* Action Icons (show on hover) */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
                <i className="far fa-heart text-gray-600 text-base"></i>
              </button>
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
                <i className="fas fa-expand text-gray-600 text-base"></i>
              </button>
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
                <i className="fas fa-lock text-gray-600 text-base"></i>
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center py-6 bg-gray-50 rounded-xl">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-contain" />
            </div>

            {/* Type and Rating */}
            <div className="flex items-center justify-between mt-4 px-4 mb-1">
              <div className="text-gray-500 text-sm">{product.type}</div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-gray-800 font-semibold">{product.rating}</span>
              </div>
            </div>
            {/* Name and Price */}
            <div className="px-4 mb-2">
              <div className="text-gray-900 font-semibold text-base">{product.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-900 text-base font-bold">${product.price?.toFixed(2) ?? "--"}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.oldPrice?.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
