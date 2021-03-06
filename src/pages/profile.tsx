import { Avatar, Card, Col, Row } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { me } from 'src/api/authApi';
import LoadingSkeleton from 'src/components/common/LoadingSkeleton';
const { Meta } = Card;

function Profile() {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    me()
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSkeleton />;
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
