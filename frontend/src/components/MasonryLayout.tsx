import React, { FC } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface MasonryLayoutProps {
  children: React.ReactNode;
}

const breakpointColumns = {
  3000: 5,
  2000: 4,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout: FC<MasonryLayoutProps> = ({ children }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={breakpointColumns}>
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
