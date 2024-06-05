import React from 'react';
import {
  Button,
  Form,
  Input,
  // InputNumber,
  Mentions,
  Select,
} from 'antd';
import NavBar from './NavBar';
import '../styling/HomePageStyling.css';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function HomePage() {
  return (
    <div className="home-page-container">
      <NavBar />
      <h1 className="training-header">Personal Training & Nutrition Help</h1>

      <div className="send-message-form">
        <Form
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 1000,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            layout="vertical"
            style={{ width: 1000, marginBottom: 33 }}
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            layout="vertical"
            style={{ width: 1000, marginBottom: 33 }}
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            {/* <InputNumber
              style={{
                width: '100%',
              }}
            /> */}
            {/* <InputDeviceInfo /> */}
            <Input />
          </Form.Item>

          <Form.Item
            label="TextArea"
            name="TextArea"
            layout="vertical"
            style={{ width: 1000, marginBottom: 40 }}
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Mentions"
            name="Mentions"
            layout="vertical"
            style={{ width: 1000, marginBottom: 30 }}
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Mentions />
          </Form.Item>

          <Form.Item
            label="Select"
            name="Select"
            layout="vertical"
            style={{ width: 1000, marginBottom: 45 }}
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/groups/152660442061070/" aria-label="Facebook group" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a></li>
          <li><a href="https://www.instagram.com/coachjessicasullivan/?hl=en" aria-label="Instagram profile" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
