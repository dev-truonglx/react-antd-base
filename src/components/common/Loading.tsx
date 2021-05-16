import { Col, Row, Spin } from 'antd';
import React from 'react';
import './styles.scss';

function Loading() {
  return (
    <Row align="middle" justify="center" style={{ height: '100vh', width: '100vw' }}>
      <Col span={24} flex="row">
        <div className="loading-content">
          <Spin size="large" />
        </div>
      </Col>
    </Row>
  );
}

export default Loading;
