import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space, Table, TablePaginationConfig } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getSchedule } from 'src/api/scheduleApi';
import { useQuery } from 'src/hooks/useQueryParam';
import { PATH } from 'src/routes/path';
import QueryString from 'src/utils/queryString';

interface UserViewUrlParams {
  current?: number;
  lessonName?: string;
  lessonCode?: string;
}
const pageSize = Number(process.env.REACT_APP_PAGE_SIZE) || 10;

const ListSchedule = () => {
  const [form] = Form.useForm();

  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const urlParams = useQuery();

  const current = Number(urlParams.get('current')) || 1;
  const lessonName = urlParams.get('lessonName') || undefined;
  const lessonCode = urlParams.get('lessonCode') || undefined;

  const params = {
    lesson_name: lessonName,
    lesson_code: lessonCode,
    page: current,
    per_page: pageSize,
  };
  const fetchData = () => {
    getSchedule(params)
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
  }, [current, lessonCode, lessonName]);

  const columns = [
    {
      title: 'Lesson name',
      dataIndex: ['lessons', 'lesson_name'],
      key: 'lesson_name',
    },
    {
      title: 'Lesson code',
      dataIndex: ['lessons', 'lesson_code'],
      key: 'lesson_code',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          <Link to={`${PATH.SCHEDULE_MANAGEMENT}/detail/${record.id}/${record.lesson_id}`}>
            <Button type="primary" icon={<EyeOutlined style={{ fontSize: 20 }} />}>
              Detail
            </Button>
          </Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    history.replace({
      pathname: history.location.pathname,
      search: QueryString.replace<UserViewUrlParams>({
        current: pagination.current,
      }),
    });
  };
  const onFinish = (values: any) => {
    // nghiên cứu đánh đổi re render sider khi route thay đổi.
    fetchData();
    // history.replace({
    //   pathname: history.location.pathname,
    //   search: QueryString.stringify<UserViewUrlParams>({
    //     lessonCode: values.lesson_code || undefined,
    //     lessonName: values.lesson_name || undefined,
    //   }),
    // });
  };

  return (
    <div>
      <Row style={{ marginBottom: 20, border: '1px solid #ddd', padding: 20 }}>
        <Col span={24}>
          <Form
            form={form}
            initialValues={{ lesson_name: lessonName, lesson_code: lessonCode }}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="lesson_name" label="label lesson_name">
                  <Input placeholder="placeholder" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lesson_code" label="label lesson_code">
                  <Input placeholder="placeholder" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Table
            loading={loading}
            dataSource={data.data || []}
            rowKey="id"
            columns={columns}
            pagination={{
              total: data.total,
              current,
              pageSize,
            }}
            locale={{ emptyText: 'no record' }}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default memo(ListSchedule);
