import { DataPropertyType } from './Reporte';

export const calculateRateOfChange = (data: DataPropertyType[]) => {
  if (data && data.length < 2) return 0;
  const lastItem = data[data.length - 1];
  const secondLastItem = data[data.length - 2];
  return (
    Number(lastItem.total_story_points) -
    Number(secondLastItem.total_story_points)
  );
};

export const calculateAverage = (data: DataPropertyType[]) => {
  if (data && data.length === 0) return 0;
  const total = data.reduce(
    (sum, item) => sum + Number(item.total_story_points),
    0
  );
  return (total / data.length).toFixed(2);
};

export const calculatePercentageChange = (
  data: DataPropertyType[]
) => {
  if (data && data.length < 2) return 0;
  const lastItem = data[data.length - 1];
  const secondLastItem = data[data.length - 2];
  const change =
    Number(lastItem.total_story_points) -
    Number(secondLastItem.total_story_points);
  return ((change / secondLastItem.total_story_points) * 100).toFixed(
    2
  );
};
