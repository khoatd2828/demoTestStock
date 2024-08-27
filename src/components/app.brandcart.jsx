'use client'
import React from 'react';
import { AppleOutlined, FacebookOutlined, GoogleOutlined, WindowsOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const icons = {
  Apple: <AppleOutlined />,
  Meta: <FacebookOutlined />,
  Microsoft: <WindowsOutlined />,
  Google: <GoogleOutlined />,
};

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
];

const BrandCard = ({ brand, onClick, isActive }) => {
  return (
    <div
      onClick={() => onClick(brand.name)}
      className={`p-8 border rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                  ${isActive ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'}`}
      style={{width: '330px'}}
    >
      <div className="flex justify-between">
        <div className="flex">
          <div className="text-3xl mb-2 mr-3 text-gray-700">
            {icons[brand.name]}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-1">{brand.name}</h3>
        </div>
        <ResponsiveContainer width={100} height={60}>
          <LineChart data={sampleData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF4D4F"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between mb-3">
        <p className="text-gray-500">Total Shares: {brand.shares}</p>
        <p className="text-gray-800 font-bold">${brand.value.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Total Return</p>
        <p className={`${brand.return < 0 ? 'text-red-500' : 'text-green-500'} font-semibold`}>
          {brand.return.toFixed(2)}%
        </p>
      </div>
      
      
    </div>
  );
};
export default BrandCard;
