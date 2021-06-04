import { Col, Descriptions, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailSchedule } from 'src/api/scheduleApi';
import LoadingSkeleton from 'src/components/common/LoadingSkeleton';

interface TypeParams {
  id: string;
  abc: string;
}
function Detail() {
  const { id, abc } = useParams<TypeParams>();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const fetchData = () => {
    getDetailSchedule(id, abc)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    fetchData();
  }, [id, abc]);

  if (loading || !Object.keys(data).length) return <LoadingSkeleton />;

  return (
    <Row>
      <Col xxl={8} lg={12} md={16} sm={24} xs={24} span={12}>
        <Descriptions title="User Info" column={1} size="small" bordered>
          <Descriptions.Item label="Course code">{data?.info?.course_code}</Descriptions.Item>
          <Descriptions.Item label="Course name">{data?.info?.course_name}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
}

export default Detail;
