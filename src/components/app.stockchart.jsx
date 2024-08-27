"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import classNames from 'classnames';
import { Divider } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockChart = ({ data, brandLogo, brandName, brandUpDown, brandPrice }) => {
  const chartData = {
    labels: ["17 Sep", "18 Sep", "19 Sep", "20 Sep", "21 Sep"],
    datasets: [
      {
        label: "Stock Value",
        data: data,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  const backgroundColor = brandUpDown < 0 ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className="relative p-7 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between">
        <div className="items-center mb-1 flex">
          <div className="text-4xl mr-3 pb-1">{brandLogo}</div>
          <div>
            <div className="text-xl font-bold">{brandName}</div>
            <div>AAPL</div>
          </div>
        </div>

        <div className="items-center mb-1 flex">
          <div className={classNames(
            "mr-3 pb-1 text-white text-[10px] rounded-3xl px-2 py-1 mt-[-18px]",
            backgroundColor
          )}>
            {brandUpDown}% {brandUpDown < 0 ? '↓' : '↑'}
          </div>
          <div>
            <div className="text-xl font-bold">${brandPrice}</div>
            <div>Last update at 14:30</div>
          </div>
        </div>
      </div>
      <Divider/>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;
