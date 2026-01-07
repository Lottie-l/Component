import { Button, Form } from 'my-component-lib';
import * as React from 'react';
function Layout() {
  const onFinish = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        validateTrigger={['onBlur', 'onChange']}
        layout="vertical"
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            { required: true, message: 'Please input username!' },
            {
              max: 8,
              message: '用户名不超过8位',
            },
          ]}
        >
          <input type="text" placeholder="输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            { required: true, message: 'Please input password!' },
            {
              max: 18,
              message: '密码应在6-18位',
              validateTrigger: 'onChange',
            },
            {
              min: 6,
              message: '密码应在6-18位',
              validateTrigger: 'onChange',
            },
          ]}
        >
          <input type="password" placeholder="输入密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Layout;
