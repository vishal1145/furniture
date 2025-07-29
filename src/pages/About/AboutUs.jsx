import React from 'react';
import aboutData from "../../data/aboutus.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import HeaderFile from '../../components/Header';
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import Team from '../../components/Team';
import teamData from '../../data/team.json';
 // For icons, or use your own SVGs

const AboutUs = () => {
  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <HeaderFile data={aboutData} />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
             <p className="text-xl text-gray-900  text-center mb-2"><span className="text-yellow-500">—</span> Our Story</p>
          <h2 className="text-4xl font-medium text-gray-900 mb-6 leading-tight">
            Crafted Comfort: Quality<br />
            <span className="text-green-800">Materials, Enduring Designs</span>
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-gray-600 max-w-2xl  mx-auto  text-xs mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>

          {/* Signature Section */}
          <div className="mb-12">
            <p className="text-3xl font-bold text-gray-800 italic mb-2" style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: "400",
              fontStyle: "italic",
              letterSpacing: "0.5px"
            }}>
              Jenny Alexander
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-700">Jenny Alexander</span>
              <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-sm text-gray-700">CEO</span>
            </div>
          </div>

          {/* Image Section with Light Gray Container */}
          <div className="rounded-2xl p-0 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Left: Large image */}
              <div className="col-span-1 md:col-span-2">
                <img
                  src={aboutData.images[0]}
                  alt="Craftsperson working with orbital sander"
                  className="rounded-2xl w-full h-[500px] object-cover shadow-lg"
                />
              </div>
              {/* Right: Two stacked images */}
              <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
                <img
                  src={aboutData.images[1]}
                  alt="Craftsperson operating drill press"
                  className="rounded-2xl w-full h-[242px] object-cover shadow-lg"
                />
                <img
                  src={aboutData.images[2]}
                  alt="Hands working with wood and tools"
                  className="rounded-2xl w-full h-[242px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

 
  <div className="bg-yellow-500 rounded-lg p-8 mt-8">
    <div className="grid grid-cols-5 gap-2 text-center">
      <div className="text-white">
        <div className="text-3xl font-bold">25+</div>
        <div className="text-sm opacity-90">Years</div>
      </div>
      <div className="text-white">
        <div className="text-3xl font-bold">180+</div>
        <div className="text-sm opacity-90">Stores</div>
      </div>
      <div className="text-white">
        <div className="text-3xl font-bold">100k+</div>
        <div className="text-sm opacity-90">Customers</div>
      </div>
      <div className="text-white">
        <div className="text-3xl font-bold">35+</div>
        <div className="text-sm opacity-90">Awards</div>
      </div>
      <div className="text-white">
        <div className="text-3xl font-bold">98%</div>
        <div className="text-sm opacity-90">Satisfied</div>
      </div>
    </div>
  </div>

          {/* --- Our Product Quality Section --- */}
           <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12  px-4 max-w-7xl mx-auto">
      {/* Left: Image with double border and rounded corners */}
      <div className="relative flex-shrink-0">
        <div
          className="rounded-2xl border-4 border-white shadow-lg"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
        >
          <div className="rounded-2xl border-2 border-white overflow-hidden">
            <img
              src={aboutData.images[0]}
              alt="Quality Craftsperson"
              className="w-[600px] h-[600px] object-cover"
            />
            <div className="absolute inset-0 m-8 border border-white rounded-[22px] pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Right: Text Card */}
      <div className="relative bg-gray-50 rounded-2xl px-8 py-16 text-left w-full max-w-2xl h-[600px] overflow-hidden">
        {/* Decorative dots - Top */}
        <div className="absolute top-0 right-24 opacity-60 pointer-events-none">
       <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Manually placed circles for a scattered look */}
    <circle cx="10" cy="20" r="5" fill="#D1D5DB" />
    <circle cx="25" cy="10" r="5" fill="#D1D5DB" />
    <circle cx="40" cy="25" r="5" fill="#D1D5DB" />
    <circle cx="60" cy="15" r="5" fill="#D1D5DB" />
    <circle cx="80" cy="30" r="5" fill="#D1D5DB" />
    <circle cx="100" cy="20" r="5" fill="#D1D5DB" />
    <circle cx="20" cy="40" r="5" fill="#D1D5DB" />
    <circle cx="35" cy="50" r="5" fill="#D1D5DB" />
    <circle cx="55" cy="40" r="5" fill="#D1D5DB" />
    <circle cx="75" cy="50" r="5" fill="#D1D5DB" />
    {/* More dots for a denser scatter */}
    <circle cx="15" cy="30" r="5" fill="#D1D5DB" />
    <circle cx="30" cy="20" r="5" fill="#D1D5DB" />
    <circle cx="50" cy="10" r="5" fill="#D1D5DB" />
    <circle cx="65" cy="35" r="5" fill="#D1D5DB" />
    <circle cx="90" cy="40" r="5" fill="#D1D5DB" />
    <circle cx="110" cy="30" r="5" fill="#D1D5DB" />
    <circle cx="5" cy="50" r="5" fill="#D1D5DB" />
    <circle cx="45" cy="55" r="5" fill="#D1D5DB" />
    <circle cx="70" cy="45" r="5" fill="#D1D5DB" />
    <circle cx="100" cy="55" r="5" fill="#D1D5DB" />
  </svg>
        </div>

        {/* Decorative dots - Bottom */}
        <div className="absolute bottom-0 left-16 opacity-60 pointer-events-none">
         <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Manually placed circles for a scattered look */}
    <circle cx="10" cy="20" r="5" fill="#D1D5DB" />
    <circle cx="25" cy="10" r="5" fill="#D1D5DB" />
    <circle cx="40" cy="25" r="5" fill="#D1D5DB" />
    <circle cx="60" cy="15" r="5" fill="#D1D5DB" />
    <circle cx="80" cy="30" r="5" fill="#D1D5DB" />
    <circle cx="100" cy="20" r="5" fill="#D1D5DB" />
    <circle cx="20" cy="40" r="5" fill="#D1D5DB" />
    <circle cx="35" cy="50" r="5" fill="#D1D5DB" />
    <circle cx="55" cy="40" r="5" fill="#D1D5DB" />
    <circle cx="75" cy="50" r="5" fill="#D1D5DB" />
    {/* More dots for a denser scatter */}
    <circle cx="15" cy="30" r="5" fill="#D1D5DB" />
    <circle cx="30" cy="20" r="5" fill="#D1D5DB" />
    <circle cx="50" cy="10" r="5" fill="#D1D5DB" />
    <circle cx="65" cy="35" r="5" fill="#D1D5DB" />
    <circle cx="90" cy="40" r="5" fill="#D1D5DB" />
    <circle cx="110" cy="30" r="5" fill="#D1D5DB" />
    <circle cx="5" cy="50" r="5" fill="#D1D5DB" />
    <circle cx="45" cy="55" r="5" fill="#D1D5DB" />
    <circle cx="70" cy="45" r="5" fill="#D1D5DB" />
    <circle cx="100" cy="55" r="5" fill="#D1D5DB" />
  </svg>
        </div>
             <p className="text-xl text-gray-900 mt-10 text-left px-8"><span className="text-yellow-500">—</span> Our Product Quality</p>
        <h3 className="text-3xl font-medium px-8 mt-4 ">
          Setting the <span className="text-green-800 mb-20">Standard for Quality Furniture</span>
        </h3>
        <p className="text-gray-600 mb-8 px-8 mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Features */}
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left px-8">
  {/* Feature 1 */}
  <div className="flex flex-col items-left gap-2 ">
    <img src="/images/logo.png" alt="Logo" className="w-20 h-20" />
    <div className="font-semibold text-gray-900">Best Quality Wood</div>
    <div className="text-gray-500 text-sm max-w-xs">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    </div>
  </div>

  {/* Feature 2 */}
  <div className="flex flex-col items-left gap-2">
    <img src="/images/logo1.png" alt="Logo" className="w-20 h-20" />
    <div className="font-semibold text-gray-900">Comfort-Driven Design</div>
    <div className="text-gray-500 text-sm max-w-xs">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    </div>
  </div>
</div>

      </div>
    </div>
      {/* --- End Our Product Quality Section --- */}

      {/* --- Meet Our Team Section --- */}
 
      {/* --- End Meet Our Team Section --- */}

        </div> {/* <-- This closes the main container! */}
      </section>
      <Team data={teamData}/>
      <Features data={furnitureData.features}/>
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default AboutUs;
