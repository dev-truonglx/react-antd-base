import { Skeleton } from 'antd';
import React, { FC, memo } from 'react';

const LoadingSkeleton: FC = () => {
  return <Skeleton active paragraph={{ rows: 15 }} />;
};

export default memo(LoadingSkeleton);
