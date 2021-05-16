import { Avatar, Card, Col, Row } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import authService from 'src/api/authApi';
const { Meta } = Card;

function Profile() {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    authService
      .meTemp()
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={user?.name}
            description={user?.email}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default memo(Profile);
