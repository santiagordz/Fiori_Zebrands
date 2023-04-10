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
    <div>
      <br></br>
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="total" fill="#0E9CFF" />
        <XAxis dataKey="status" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default TinyBarChart;
