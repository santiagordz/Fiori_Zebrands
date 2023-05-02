import React, { FC } from 'react';
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
} from 'recharts';

interface ChartData {
  data: {
    status: string;
    total_story_points: number;
  }[];
  barColor?: string;
  hoverColor?: string;
}

function CustomTooltip({ payload, label, active }: any) {
  if (payload && payload.length > 0 && label !== undefined) {
    return (
      <div className="bg-white p-2 text-xs border-2 rounded">
        <p>Estado: {label}</p>
        <p>Story Points: {payload[0].value} </p>
      </div>
    );
  }
  return null;
}

export default function StackedBarChart({
  data,
  barColor,
  hoverColor,
}: ChartData) {
  const maxY = Math.max(...data.map((d) => d.total_story_points));
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart width={100} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 6" />
        <XAxis dataKey="status" fontSize={12} />
        <YAxis domain={[0, maxY + 20]} fontSize={13} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: hoverColor || '#e7f0fe' }}
        />
        <Bar
          dataKey="total_story_points"
          fill={barColor || '#388bff'}
          name="Story Points"
          label={{ position: 'top', fontSize: 12 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
