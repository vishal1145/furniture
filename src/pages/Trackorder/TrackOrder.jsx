import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import trackData from '../../data/trackorder.json';
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Features from "../../components/Features";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tracking:", { orderId, email });
    
    // Navigate to track order results page
    navigate('/track-results', { 
      state: { 
        orderId, 
        email 
      } 
    });
  };

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <Header data={trackData.header} /> {/* ✅ FIXED - Pass header object specifically */}

      <section className="py-16 px-6 sm:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Instructional Text */}
          <p className="text-gray-700 mb-8 text-left leading-relaxed">
            To track your order please enter your Order ID in the box below and press the "Track Order" button. This was given to you on your receipt and in the confirmation email you should have received.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 mb-2 text-left">
                Order ID *
              </label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Your Order ID"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 bg-white"
             
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-2 text-left">
                Billing Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 bg-white"
               
              />
            </div>

            <button
              type="submit"
              className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium"
            >
              Track Order
            </button>
          </form>
        </div>
      </section>

      <Features data={furnitureData.features} />
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default TrackOrder;
