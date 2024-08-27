"use client";
import React, { useState } from "react";
import BrandCard from "./app.brandcart";
import Watchlist from "./app.watchlist";
import StockChart from "./app.stockchart";
import { AppleOutlined, FacebookOutlined, GoogleOutlined, WindowsOutlined } from '@ant-design/icons';

const brandsData = [
  { name: "Apple", shares: 150, value: 310.4, return: -1.1 },
  { name: "Meta", shares: 200, value: 140.45, return: -0.1 },
  { name: "Microsoft", shares: 180, value: 240.98, return: 0.85 },
  { name: "Google", shares: 120, value: 99.12, return: -0.04 },
];

const brandUpDown = {
  Apple: -150,
  Meta: +200,
  Microsoft: +180,
  Google: -120,
};

const brandPrice = {
  Apple: 310.4,
  Meta: 140.45,
  Microsoft: 240.98,
  Google: 99.12,
};

const icons = {
  Apple: <AppleOutlined />,
  Meta: <FacebookOutlined />,
  Microsoft: <WindowsOutlined />,
  Google: <GoogleOutlined />,
};

const watchlistData = [
  { name: "Spotify", value: 310.4, return: -1.1 },
  { name: "Airbnb", value: 132.72, return: -10.29 },
  { name: "Shopify", value: 28.57, return: -6.48 },
  { name: "Playstation", value: 71.86, return: 0.98 },
  { name: "Dropbox", value: 20.44, return: 1.23 },
  { name: "Paypal", value: 87.66, return: -3.86 },
];

const Portfolio = () => {
  const [selectedBrand, setSelectedBrand] = useState("Apple");

  const chartData = {
    Apple: [200, 220, 210, 230, 235],
    Meta: [140, 142, 138, 136, 140],
    Microsoft: [240, 245, 243, 248, 250],
    Google: [90, 92, 91, 89, 90],
  };

  return (
    <div className="container mx-auto p-8"> 
      <h2 className="text-2xl font-bold pb-8">My Portfolio</h2>
      <div className="flex justify-between mb-8">
        {brandsData.map((brand) => (
          <BrandCard
            key={brand.name}
            brand={brand}
            onClick={setSelectedBrand}
            isActive={selectedBrand === brand.name}
          />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-8 h-full">
        <div className="col-span-8 flex flex-col h-full">
          <StockChart data={chartData[selectedBrand]} brandLogo={icons[selectedBrand]} brandName={[selectedBrand]} brandUpDown={brandUpDown[selectedBrand]} brandPrice={brandPrice[selectedBrand]}/>
        </div>
        <div className="col-span-4 flex flex-col h-full">
          <Watchlist watchlist={watchlistData} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio
