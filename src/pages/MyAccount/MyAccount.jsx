import React, { useState } from "react";
import data from "../../data/myaccount.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Features from "../../components/Features";

const MyAccount = () => {
  const [formData, setFormData] = useState({ ...data });
  const [activeTab, setActiveTab] = useState("Personal Information");
  const [addressForm, setAddressForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Manage Address":
        return (
          <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-sm">
            {/* Existing Addresses */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Existing Addresses</h3>
              {data.addresses.map((address, index) => (
                <div key={index} className="border rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{address.name}</h4>
                      <p className="text-gray-600 mt-1">{address.address}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-gray-900 text-sm hover:text-gray-700 transition-colors">
                        Edit
                      </button>
                      <button className="text-red-600 text-sm hover:text-red-700 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Address Form */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Address</h3>
              <form className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={addressForm.firstName}
                    onChange={handleAddressChange}
                    placeholder="Ex. John"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={addressForm.lastName}
                    onChange={handleAddressChange}
                    placeholder="Ex. Doe"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={addressForm.companyName}
                    onChange={handleAddressChange}
                    placeholder="Enter Company Name"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Country *</label>
                  <select
                    name="country"
                    value={addressForm.country}
                    onChange={handleAddressChange}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Street Address *</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={addressForm.streetAddress}
                    onChange={handleAddressChange}
                    placeholder="Enter Street Address"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">City *</label>
                  <select
                    name="city"
                    value={addressForm.city}
                    onChange={handleAddressChange}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  >
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">State *</label>
                  <select
                    name="state"
                    value={addressForm.state}
                    onChange={handleAddressChange}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  >
                    <option value="">Select State</option>
                    <option value="New York">New York</option>
                    <option value="California">California</option>
                    <option value="Illinois">Illinois</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Zip Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={addressForm.zipCode}
                    onChange={handleAddressChange}
                    placeholder="Enter Zip Code"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Phone *</label>
                  <input
                    type="text"
                    name="phone"
                    value={addressForm.phone}
                    onChange={handleAddressChange}
                    placeholder="Enter Phone Number"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={addressForm.email}
                    onChange={handleAddressChange}
                    placeholder="Enter Email Address"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                  />
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Add Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        );

      case "My Orders":
        return (
          <div className="w-full lg:w-3/4 bg-white  rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Orders ({data.orders.length})</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>

            {data.orders.map((order, index) => (
              <div key={index} className="mb-6 border rounded-lg overflow-hidden  bg-white">
                {/* Order Header */}
                <div className="bg-yellow-400 p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Order ID:</span>
                      <p className="text-gray-700 font-semibold">{order.orderId}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Total Payment:</span>
                      <p className="text-gray-700 font-semibold">{order.totalPayment}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Payment Method:</span>
                      <p className="text-gray-700 font-semibold">{order.paymentMethod}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        {order.status === "Delivered" ? "Delivered Date:" : "Estimated Delivery:"}
                      </span>
                      <p className="text-gray-700 font-semibold">{order.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-4 bg-white">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-4 py-4 border-b last:border-b-0">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
  <img
    src={item.image}
    alt={item.name}
    className="w-14 h-14 object-cover"
  />
</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Color: {item.color} | Qty. {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Add border after the row for second order */}
                  {index === 1 && (
                    <div className="border-t-2 border-gray-200 mt-4"></div>
                  )}
                </div>

                {/* Order Status and Actions */}
                <div className="p-4 bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex items-center gap-2 ">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered" 
                            ? "bg-green-500 text-white" 
                            : "bg-orange-100 text-gray-900 border border-orange-300"
                        }`}>
                          {order.status}
                        </span>
                        <span className="text-sm text-gray-600">
                          Your Order has been {order.status}
                        </span>
                      </div>
                      {order.status === "Accepted" && (
                        <div className="flex items-center gap-3">
                          <button className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                            Track Order
                          </button>
                          <button className="border border-green-800 text-green-800 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition-colors">
                            Invoice
                          </button>
                        </div>
                      )}
                      {order.status === "Delivered" && (
                        <div className="flex items-center gap-3">
                          <button className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                            Add Review
                          </button>
                          <button className="border border-green-800 text-green-800 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition-colors">
                            Invoice
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center ">
                      {order.status === "Accepted" ? (
                        <button className="text-red-600 text-sm hover:text-red-700 transition-colors mt-12">
                          Cancel Order
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "Personal Information":
      default:
        return (
          <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col items-left gap-4 mb-6">
              <div className="relative w-24 h-24">
                <img
                  src={formData.avatar}
                  alt="Profile"
                  className="w-24 h-24 object-cover rounded-full border"
                />
                <button className="absolute bottom-0 right-0 bg-green-800 w-7 h-7 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900">Gender *</label>
            <div className="relative">
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="appearance-none mt-1 w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 pr-10"
  >
    <option value="Female">Female</option>
    <option value="Male">Male</option>
    <option value="Other">Other</option>
  </select>

  {/* Custom Dropdown Icon */}
  <div className="pointer-events-none absolute inset-y-0 top-2 right-3 flex items-center">
    <svg
      className="w-6 h-6 text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 12a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L10 10.19l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 12z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>

              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-700 transition-colors">
              Update Changes
            </button>
          </div>
        );
    }
  };

  return (
    <>
    <Navbar data={furnitureData.navigation} />
      <Header data={data} />
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-3">
          {[
            "Personal Information",
            "My Orders",
            "Manage Address",
            "Payment Method",
            "Password Manager",
            "Logout"
          ].map((item, idx) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full text-left px-5 py-3 rounded-lg border ${
                activeTab === item
                  ? "bg-yellow-400 text-black font-medium"
                  : "bg-white hover:bg-gray-50 text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {renderContent()}
      </div>
    </section>
    
          <Features data={furnitureData.features}/>
      <Footer data={furnitureData.footer} />
    </>
    

  );
};

export default MyAccount;
