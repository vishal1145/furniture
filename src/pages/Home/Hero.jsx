import React, { useState, useParam } from "react";
import { useNavigate,} from "react-router-dom";


const Dots = ({ className, style }) => (
  <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Dots */}
    <circle cx="10" cy="20" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="25" cy="10" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="10" cy="20" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="25" cy="10" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="40" cy="25" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="60" cy="15" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="80" cy="30" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="100" cy="20" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="20" cy="40" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="35" cy="50" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="55" cy="40" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="75" cy="50" r="4" fill="#E5E7EB" opacity="1.5" />
    {/* More dots for a denser scatter */}
    <circle cx="15" cy="30" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="30" cy="20" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="50" cy="10" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="65" cy="35" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="90" cy="40" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="110" cy="30" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="5" cy="50" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="45" cy="55" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="70" cy="45" r="4" fill="#E5E7EB" opacity="1.5" />
    <circle cx="100" cy="55" r="4" fill="#E5E7EB" opacity="1.5" />
    {/* Add other dots */}
  </svg>
);

const CARDS_VISIBLE = 2; // Change to 1 or 2 if you want

const Hero = ({ data }) => {
  const navigate = useNavigate();
  const [startIdx, setStartIdx] = useState(0);
  const cards = data.cards;

  const canPrev = startIdx > 0;
  const canNext = startIdx + CARDS_VISIBLE < cards.length;

  const handlePrev = () => {
    if (canPrev) setStartIdx(startIdx - 1);
  };
  const handleNext = () => {
    if (canNext) setStartIdx(startIdx + 1);
  };

  const handleOpenShopPage = () => {
    navigate("/shop");
  };
  
  const openProductDetails = (card) => {
    // Create a product object with all necessary fields for product details page
    const productData = {
      id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID
      name: card.title,
      title: card.title,
      type: card.type,
      image: card.image,
      price: parseFloat(card.price.replace('$', '')) || 199,
      oldPrice: parseFloat(card.price.replace('$', '')) * 1.5 || 299,
      category: card.type,
      description: `Explore our amazing ${card.title} collection with ${card.items} items available.`,
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      colors: ['#8B4513', '#A0522D', '#FFFFFF', '#008080', '#0000FF'],
      sku: `FRNC${Math.floor(Math.random() * 10000)}`,
      tags: ["Furniture", card.type, "Home"]
    };

    navigate(`/shop/${card.type}/product-details/${productData.id}`, {
      state: { productData: productData }
    });
  };

  return (
    <section className="bg-gray-100 px-6 sm:px-12 lg:px-32 py-24">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute left-72 top-96 z-10">
          <Dots />
        </div>

        <div className="absolute right-[550px] bottom-96 z-10">
          <Dots />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center justify-between relative z-10">
          {/* Text Content */}
          <div className="space-y-4 text-left">
            <div className="inline-flex bg-white text-black px-4 py-2 rounded-full text-sm items-center gap-2">
              <img src="/icons/start.svg" className="w-4 h-4" alt="star" />
              {data.badge.text}
            </div>

            <h1 className="text-5xl font-medium text-gray-900 leading-tight">
              {data.title.main}{" "}
              <span className="text-green-900">{data.title.accent}</span>
              <br />
              <span className="text-green-900">{data.title.subtitle}</span>
            </h1>

            <p className="text-gray-500 text-sm max-w-md">{data.description}</p>

            <div className="flex gap-6 flex-wrap items-center">
              <button
                onClick={handleOpenShopPage}
                className="bg-green-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 flex items-center gap-2"
              >
                {/* {data.buttons.primary} */}
                Shop now
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5.3 5.3a1 1 0 010 1.414l-5.3 5.3a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a
                href="/shop"
                className="text-black text-sm mt-2 font-semibold underline decoration-black hover:opacity-80"
              >
                {data.buttons.secondary}
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2 overflow-hidden">
                {data.rating.users.map((user, index) => (
                  <img
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={user}
                    alt={`User ${index + 1}`}
                  />
                ))}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300 border-2 border-white text-black text-lg font-bold">
                  +
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-700">
                  {data.rating.score} {data.rating.text}
                </p>
                <p className="text-gray-500 text-xs">{data.rating.subtext}</p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col items-center w-full">
            <div className="relative w-full flex justify-center py-2">
              {/* Cards */}
              {cards
                .slice(startIdx, startIdx + CARDS_VISIBLE)
                .map((card, index) => (
                  <div
                    key={index}
                    className="hero-card bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition relative group max-w-xs min-w-[260px] mx-2"
                  >
                    <img
                      src={card.image}
                      className="rounded-lg object-cover h-48 w-full"
                      alt={card.title}
                    />

                    {/* Decorative Point */}
                    <div
                      className="absolute"
                      style={{ top: "18px", left: "60px" }}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-transparent shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>

                    <div className="absolute top-32 right-3 bg-transparent text-white text-sm px-4 py-1 rounded-full font-semibold shadow border border-white">
                      {card.price}
                    </div>

                    <h3 className="font-semibold text-gray-800 mt-3 text-left">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-xs text-left">
                      {card.items}
                    </p>
                    <div
                      className={`absolute bottom-3 cursor-pointer right-3 ${
                        card.color === "green"
                          ? "bg-green-900 hover:bg-green-800"
                          : "bg-yellow-500 hover:bg-yellow-600"
                      } text-white p-2 rounded-full shadow-lg transition`}
                    >
                      <svg
                       onClick={() => openProductDetails(card)}
                        className="w-4 h-4 -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    {/* Only render buttons below the first card */}
                    {index === 0 && (
                      <div className="absolute left-8 -bottom-16 flex gap-3">
                        <button
                          onClick={handlePrev}
                          disabled={!canPrev}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-green-900 hover:bg-green-800 transition ${
                            !canPrev ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <svg
                            className="w-5 h-5 rotate-180 transition-colors hover:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={!canNext}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-yellow-500 hover:bg-yellow-600 transition ${
                            !canNext ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <svg
                            className="w-5 h-5 transition-colors hover:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Prev/Next Buttons */}
            {/* This div is no longer needed as buttons are now inside cards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
