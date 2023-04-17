import React, { FC } from 'react';

interface ChartCardsProps {
  children: React.ReactNode;
  title?: string;
  height?: string;
  bgColor?: string;
}

const ChartCards: FC<ChartCardsProps> = ({
  children,
  title,
  height,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col gap-6 p-7 w-full ${
        height || 'h-full'
      } ${bgColor || 'bg-white'} rounded border border-gray-200`}
    >
      {title && (
        <p className="text-sm font-medium text-textNormal">{title}</p>
      )}

      {children}
    </div>
  );
};

export default ChartCards;
