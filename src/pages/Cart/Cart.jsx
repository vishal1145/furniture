import React, { useState } from "react";
import cartData from "../../data/cart.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(cartData.items);

  const updateQty = (id, delta) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, qty: Math.max(1, item.qty + delta) }
        : item
    );
    setCartItems(updated);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const total = subtotal - cartData.coupon + cartData.shipping + cartData.tax;

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <Header data={cartData} />

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Cart Table */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 md:grid-cols-5 text-left font-semibold text-sm mb-4 bg-yellow-500 p-4 rounded-lg">
              <span className="col-span-2">Product</span>
              <span className="hidden md:inline">Price</span>
              <span>Quantity</span>
              <span className="text-right">Subtotal</span>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 md:grid-cols-5 items-center border-b last:border-b-0 gap-4 py-8" // Increased row height
              >
                <div className="col-span-2 flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xl text-gray-400 hover:text-red-500"
                  >
                    ×
                  </button>
                  <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center"> {/* Larger image box */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain" // Larger image
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">Color : {item.color}</p>
                  </div>
                </div>
                <span className="hidden md:inline text-gray-900 font-medium">
                  ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden h-12 min-w-[120px] bg-white"> {/* Larger quantity selector */}
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-12 h-12 flex items-center justify-center text-xl text-gray-700"
                    >
                      –
                    </button>
                    <div className="w-12 h-12 flex items-center justify-center text-base font-medium border-l border-r border-gray-300 select-none">
                      {item.qty}
                    </div>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-12 h-12 flex items-center justify-center text-xl text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="text-right font-semibold text-gray-900">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}

            {/* Coupon + Clear */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-200 rounded-full px-5 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-green-900 text-base"
                />
                <button className="bg-green-900 hover:bg-green-800 text-white px-7 py-2 rounded-full font-semibold text-base">
                  Apply Coupon
                </button>
              </div>
              <button className="text-green-900 underline font-medium text-base">
                Clear Shopping Cart
              </button>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="border rounded-xl p-3 shadow-sm bg-white h-fit">
            <div>
              <h3 className="text-lg font-medium mb-4 ">Order Summary</h3>
              <hr className="my-4" />
              <div className="flex justify-between text-base mb-3 ">
                <span className="text-gray-400" >Items</span>
                <span>{totalQty}</span>
              </div>
              <div className="flex justify-between text-base mb-3">
                <span className="text-gray-400">Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base mb-3">
                <span className="text-gray-400">Shipping</span>
                <span>${cartData.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base mb-3">
                <span className="text-gray-400">Taxes</span>
                <span>${cartData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base mb-3">
                <span className="text-gray-400" >Coupon Discount</span>
                <span> ${cartData.coupon.toFixed(2)}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between  text-base mb-6">
                <span className="text-gray-400" >Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
           <button
  onClick={() => navigate('/checkout')}
  className="w-full bg-green-900 text-white py-3 rounded-full text-sm  hover:bg-green-800 transition"
>
  Proceed to Checkout
</button>
          </div>
        </div>
      </div>
      <Features data={furnitureData.features}/>
      {/* ✅ Footer */}
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default Cart;
