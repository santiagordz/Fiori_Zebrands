import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
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
  isSprint?: boolean;
  barColor?: string;
  lineColor?: string;
  animation?: boolean;
  showHeights?: boolean;
}

function CustomTooltip({ payload, label, active, isSprint }: any) {
  if (payload && payload.length > 0 && label !== undefined) {
    return (
      <div className="bg-white p-2 text-xs border-2 rounded">
        <p>
          {isSprint ? 'Sprint' : 'Epic'}: {label}
        </p>
        <p>Story Points: {payload[0].value} </p>
      </div>
    );
  }
  return null;
}

export default function SameDataComposedChart({
  data,
  barColor = '#388bff',
  lineColor = '#5E4DB2',
  animation = true,
  showHeights = false,
  isSprint = true,
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
        <Tooltip content={<CustomTooltip isSprint={isSprint} />} />
        <Legend />
        <Bar
          isAnimationActive={animation}
          dataKey="total_story_points"
          name="Story points"
          barSize={20}
          fill={barColor}
        >
          {showHeights && (
            <LabelList
              dataKey="total_story_points"
              position="top"
              className="text-base"
            />
          )}
        </Bar>
        <Line
          isAnimationActive={animation}
          type="monotone"
          name={'Total'}
          dataKey="total_story_points"
          stroke={lineColor}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
