import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface SameDataComposedChartProps {
  data: {
    nombre: string;
    total_story_points: number;
  }[];
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
        <p className="label">{`Sprint: ${label}`}</p>
        <p className="story-points">{`Total Story Points: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}

export default function SameDataComposedChart({ data }: SameDataComposedChartProps) {
  const maxY = Math.max(...data.map(item => item.total_story_points));
  const minY = Math.min(...data.map(item => item.total_story_points));
  const yAxisPadding = (maxY - minY) * 0.1;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="nombre" tick={false} /> {/* Aquí se configura el eje X para ocultar los ticks */}
        <YAxis domain={[minY - yAxisPadding, maxY + yAxisPadding]} />
        <Tooltip  />
        <Legend />
        <Bar dataKey="total_story_points" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="total_story_points" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
