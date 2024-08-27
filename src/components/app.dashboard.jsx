"use client";

import React, { useState } from "react";
import Portfolio from "./app.portfolio";

const Dashboard = () => {
  const [selectedBrand, setSelectedBrand] = useState("Apple");

  const chartData = {
    labels: ["17 Sep", "18 Sep", "19 Sep", "20 Sep", "21 Sep", "22 Sep"],
    datasets: [
      {
        label: selectedBrand,
        data:
          selectedBrand === "Apple"
            ? [200, 220, 210, 230, 225, 240]
            : selectedBrand === "Meta"
            ? [150, 180, 160, 200, 190, 210]
            : selectedBrand === "Microsoft"
            ? [250, 260, 255, 270, 265, 280]
            : [100, 120, 110, 130, 125, 140],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <Portfolio onSelectBrand={setSelectedBrand} />
    </div>
  );
};

export default Dashboard;
