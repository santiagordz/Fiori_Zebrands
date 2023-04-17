import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { FC } from 'react';

function CustomTooltip({ payload, label, active }: any) {
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        <p className="label">{`Opción: ${label.toUpperCase()}`}</p>
        <p className="total">{`Total: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
}

interface TinyBarChartProps {
  data: {
    status: string | number;
    total: number;
  }[];
}

const TinyBarChart: FC<TinyBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart
        width={200}
        height={200}
        data={data}
        margin={{ top: 20 }}
      >
        <Bar dataKey="total" fill="#0E9CFF" />
        <XAxis dataKey="status" />
        <YAxis domain={[0, 100]} />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart;
