import React from 'react';
import HeroBg from '../assets/hero-image.jpg';

const ProvidersHero = () => {
  return (
    <section
      className="relative w-screen h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white px-6 sm:px-10">
        {/* Top text + buttons */}
        <div className="pt-32 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Featured Provider</h1>
          <p className="text-xl mb-8">Find what you are looking for at BuildLinks</p>

          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold">
              Explore More
            </button>
            <button className="flex items-center space-x-2 text-white">
              <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center">
                {/* Play Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Search + Categories */}
        <div className="mb-20 w-full">
          <div className="w-full max-w-5xl mx-auto bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select className="p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>All</option>
                <option>Builders</option>
                <option>Plumbers</option>
                <option>Electricians</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Search
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {["All", "Builders", "Plumber", "Electrician", "Company", "Freelancer"].map(
              (item, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-2 text-lg rounded-full font-medium border-2 border-sky-500 transition ${
                    idx === 0
                      ? "bg-sky-500 text-white"
                      : "bg-white/80 text-gray-700 hover:bg-sky-100"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvidersHero;

