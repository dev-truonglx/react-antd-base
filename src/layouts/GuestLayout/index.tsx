import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const GuestLayout: FC<Props> = (props) => {
  return <div style={{ height: '100vh' }}>{props.children}</div>;
};

export default GuestLayout;
