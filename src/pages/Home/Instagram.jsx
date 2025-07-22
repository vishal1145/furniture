import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

const Instagram = ({ data }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 1; // pixels per tick
    const scrollDelay = 20; // ms per tick

    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // Instantly reset to the start of the first set
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollStep;
      }
    }, scrollDelay);

    return () => clearInterval(interval);
  }, []);

  // Double the images for seamless infinite scroll
  const images = [...data.images, ...data.images];

  return (
    <section className="bg-gray-50 px-6 sm:px-12 lg:px-32 py-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-900 mb-1">
          <span className="text-yellow-500">—</span> {data.subtitle}
        </p>
        <h2 className="text-4xl font-medium text-gray-900">
          {data.title.split(' ').slice(0, 3).join(' ')}{' '}
          <span className="text-green-900 font-medium ">
            {data.title.split(' ').slice(3).join(' ')}
          </span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden flex-shrink-0"
            style={{ width: 220, height: 220 }}
          >
            <img
              src={image}
              alt={`Instagram Post ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {/* Instagram Icon Overlay for second image */}
            {index % data.images.length === 1 && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 hover:bg-opacity-50 transition">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram; 