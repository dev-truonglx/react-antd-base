import { Button, Col, Form, Input, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from 'src/features/auth/authenticate';
import { PATH } from 'src/routes/path';
import './styles.scss';

Login.propTypes = {};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state: any) => state.user.token);
  const loading = useSelector((state: any) => state.user.loading);

  useEffect(() => {
    if (token) history.push(PATH.HOME);
  }, [token]);

  const onFinish = async (values: any) => {
    try {
      await dispatch(login(values));
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row justify="center" align="middle" className="login">
      <Col span={8}>
        <div className="login-form">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Customer code"
              name="customer_code"
              rules={[{ required: true, message: 'Please input your customer code!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Login id"
              name="login_id"
              rules={[{ required: true, message: 'Please input your login id!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
