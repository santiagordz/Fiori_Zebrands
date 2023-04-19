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
      <div className="bg-white p-2 text-xs border-2 rounded">
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
  hoverColor?: string;
}

const TinyBarChart: FC<TinyBarChartProps> = ({
  data,
  hoverColor,
}) => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart
        width={200}
        height={200}
        data={data}
        margin={{ top: 20 }}
      >
        <XAxis dataKey="status" />
        <YAxis domain={[0, 100]} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: hoverColor || '#e7f0fe' }}
        />
        <Bar dataKey="total" fill="#0E9CFF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart;
