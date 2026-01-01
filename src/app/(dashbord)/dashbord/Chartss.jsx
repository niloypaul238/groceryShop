'use client'
import {
  LineChart, Line, XAxis, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell
} from "recharts";

import {
  salesData,
  revenueData,
  donutData
} from "../../../../public/chartData";

const COLORS = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"];

export default function Chartss() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Total Sales */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h4 className="font-semibold text-gray-700">Total Sales</h4>
        <p className="text-xl font-bold text-gray-900">$21,845</p>

        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#84cc16"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Report */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h4 className="font-semibold text-gray-700 mb-3">
          Revenue Report
        </h4>

        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={revenueData}>
            <Bar dataKey="earning" fill="#22c55e" radius={[6,6,0,0]} />
            <Bar dataKey="expense" fill="#9ca3af" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="flex gap-4 mt-3 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Earning
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            Expense
          </span>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h4 className="font-semibold text-gray-700 mb-3">
          Sales Overview
        </h4>

        <div className="flex items-center gap-6">
          <PieChart width={180} height={180}>
            <Pie
              data={donutData}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {donutData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>

          <div className="text-sm space-y-2">
            <p className="font-bold text-lg">$86,400</p>
            {donutData.map((item, i) => (
              <p key={i} className="flex justify-between gap-4">
                <span className="text-gray-600">{item.name}</span>
                <span className="font-semibold">
                  ${item.value.toLocaleString()}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
