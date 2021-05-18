import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { RootRouter } from './routes/index';

function App() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
