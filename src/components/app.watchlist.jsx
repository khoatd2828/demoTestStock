"use client";
import React from 'react';
import { Card, Divider } from 'antd';
import Image from 'next/image';

const stockLogos = {
  Spotify: '/img/spotify-logo.png',
  Airbnb: '/img/airbnb-logo.png',
  Shopify: '/img/shopify-logo.png',
  Playstation: '/img/playstation-logo.png',
  Dropbox: '/img/dropbox-logo.png',
  Paypal: '/img/paypal-logo.png',
};

const Watchlist = () => {
  const stocks = [
    { name: 'SPOT', nameaka: 'Spotify', price: 310.40, change: -1.1 },
    { name: 'ABNB', nameaka: 'Airbnb', price: 132.72, change: -10.29 },
    { name: 'SHOP', nameaka: 'Shopify', price: 28.57, change: -6.48 },
    { name: 'SONY', nameaka: 'Playstation', price: 71.86, change: 0.98 },
    { name: 'DBX', nameaka: 'Dropbox', price: 20.44, change: 1.23 },
    { name: 'PYPL', nameaka: 'Paypal', price: 87.66, change: -3.86 },
  ];

  return (
    <Card title="My Watchlist" className="bg-white rounded-lg shadow-lg">
      {stocks.map(stock => (
        <div key={stock.name} className="flex items-center justify-between mb-[4px]  p-3 rounded hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <Image src={stockLogos[stock.nameaka]} alt={`${stock.nameaka} logo`} width={50} height={50} />
            <div className="flex flex-col">
              <span className="ml-2 text-lg font-semibold">{stock.name}</span>
              <span className="ml-2 text-lg">{stock.nameaka}</span>
            </div>
          </div>
          <span className={`text-lg ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            ${stock.price} ({stock.change}%)
          </span>
        </div>
      ))}
    </Card>
  );
};

export default Watchlist;
