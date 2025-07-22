import React, { useState } from "react";
import contactData from "../../data/contact.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Features from "../../components/Features";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <Header data={contactData} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-sm mb-8">
              Your email address will not be published. Required fields are marked*
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex. John Doe"
                    className="w-full border rounded-full px-4 py-2"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full border rounded-full px-4 py-2"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  className="w-full border rounded-full px-4 py-2"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Your Message *</label>
                <textarea
                  name="message"
                  placeholder="Enter here.."
                  rows="5"
                  className="w-full border rounded-2xl px-4 py-2"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="bg-green-900 text-white px-6 py-2 rounded-full font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info Panel */}
          <div className="bg-green-900 text-white p-8 rounded-[2rem] flex flex-col gap-8 min-h-[420px]">
            {/* Address */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p className="text-base">{contactData.address}</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contact</h3>
              <p className="text-base">Phone : {contactData.contact.phone}</p>
              <p className="text-base">Email : {contactData.contact.email}</p>
            </div>

            {/* Open Time */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Open Time</h3>
              <p className="text-base">
                Monday - Friday &nbsp; : &nbsp; {contactData.opening_hours.weekdays}
              </p>
              <p className="text-base">
                Saturday - Sunday : &nbsp; {contactData.opening_hours.weekends}
              </p>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
              <div className="flex gap-6">
                {contactData.social_icons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 rounded-full flex items-center justify-center w-14 h-14"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full text-black text-2xl">
                      <i className={icon.icon}></i>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="w-full rounded-2xl overflow-hidden" style={{ minHeight: 250, maxHeight: 350 }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.858234857964!2d-74.0086806845932!3d40.7130549793316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19f8b1e7b1%3A0x8d8e8e8e8e8e8e8e!2sPark%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Features data={furnitureData.features}/>
      {/* ✅ Footer */}
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default ContactUs;
