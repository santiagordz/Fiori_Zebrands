import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React, { FC } from "react";

interface TinyBarChartProps {
  data: {
    status: string | number;
    total: number;
  }[];
}

const TinyBarChart: FC<TinyBarChartProps> = ({ data }) => {
  return (
    <BarChart width={400} height={400} data={data}>
      <Bar dataKey="total" fill="#8884d8" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Legend />
    </BarChart>
  );
};

export default TinyBarChart;
