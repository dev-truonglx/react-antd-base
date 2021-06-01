import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const GuestLayout: FC<Props> = (props) => {
  return <div style={{ height: '100vh', width: '100VW' }}>{props.children}</div>;
};

export default GuestLayout;
