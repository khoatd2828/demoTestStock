'use client'
import React from 'react';

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-900 via-purple-800 to-purple-900 text-white py-20 px-10 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Easily invest in stocks and crypto
          <br />
          in one <span className="text-gradient-to-r from-blue-400 via-purple-400 to-blue-500">GoStock platform</span>
        </h1>
        <p className="text-gray-300 mb-8">
          Get all the conveniences of investing in stocks or cryptocurrencies in one GoStock platform.
          <br />
          Now you can use this app in desktop version.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-transparent border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-black transition-all">
            How it works
          </button>
          <button className="bg-white text-black rounded-full px-6 py-2 hover:bg-gray-200 transition-all">
            Get app now <span className="ml-2">⬇️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
