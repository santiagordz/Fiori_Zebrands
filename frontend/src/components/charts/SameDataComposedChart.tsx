import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface SameDataComposedChartProps {
  data: {
    nombre: string;
    total_story_points: number;
  }[];
  barColor?: string;
  lineColor?: string;
}

function CustomTooltip({ payload, label, active }: any) {
  if (active && payload.length > 0 && label) {
    return (
      <div className="bg-white p-2 text-xs border-2 rounded">
        <p>Sprint: {label}</p>
        <p>Story Points: {payload[0].value} </p>
      </div>
    );
  }
  return null;
}

export default function SameDataComposedChart({
  data,
  barColor,
  lineColor,
}: SameDataComposedChartProps) {
  const maxY = Math.max(
    ...data.map((item) => item.total_story_points)
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={100}
        height={100}
        data={data}
        margin={{
          top: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="nombre" tick={false} />
        <YAxis domain={[0, maxY + 3]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="total_story_points"
          name="Story Points"
          barSize={20}
          fill={barColor || '#388bff'}
        />
        <Line
          type="monotone"
          name={'Total'}
          dataKey="total_story_points"
          stroke={lineColor || '#5E4DB2'}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
