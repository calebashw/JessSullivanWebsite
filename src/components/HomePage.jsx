import React from 'react';
import {
  Button,
  Form,
  Input,
  Image,
  // Mentions,
  Select,
} from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import NavBar from './NavBar';
import '../styling/HomePageStyling.css';

const phoneNumberRules = [
  {
    required: true,
    message: 'Please input your phone number!',
  },
  {
    pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message: 'Phone number must be in a valid format, e.g., (123) 456-7890.',
  },
];

function ImageWithText() {
  return (
    <div className="image-container">
      <Image preview={false} src="/img/jessartmuseum-155.jpg" className="background-image" />
      <div className="overlay-text">
        <h1>Coach Jessica Sullivan</h1>
        <h2>Feel better. Live better.</h2>
      </div>
    </div>
  );
}

function HomePage() {
  const onFinish = (values) => {
    // Send email using EmailJS
    emailjs.send('service_36ao2ai', 'template_z3lxjit', values, 'FUGDPYqYGle-23aHn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="home-page-container">
      <NavBar />
      {/* <Image preview={false} src="/img/jessartmuseum-155.jpg" /> */}
      <ImageWithText />
      <h1 className="training-header">Personal Training & Nutrition Help</h1>
      <div className="send-message-form">
        <Form
          labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
          wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
          style={{
            maxWidth: 600, // Adjusted to a reasonable width
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Please enter a valid email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={phoneNumberRules}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Enter your phone number"
              maxLength={15}
            />
          </Form.Item>

          {/* <Form.Item
            label="Mentions"
            name="mentions"
            rules={[
              {
                required: true,
                message: 'Please input mentions!',
              },
            ]}
          >
            <Mentions />
          </Form.Item> */}
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <Input maxLength={5} />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: 'Please make a selection!',
              },
            ]}
          >
            <Select
              options={[
                {
                  value: 'Male',
                  label: 'Male',
                },
                {
                  value: 'Female',
                  label: 'Female',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Fitness Level"
            name="fitness_level"
            rules={[
              {
                required: true,
                message: 'Please make a selection!',
              },
            ]}
          >
            <Select
              options={[
                {
                  value: 'Very fit',
                  label: 'I am very fit and looking for tightening and strengthening tips',
                },
                {
                  value: 'Okay fitness',
                  label: 'I am okay, could use some help',
                },
                {
                  value: 'Health issue',
                  label: 'I have a health issue, need lifestyle change',
                },
                {
                  value: 'Terrible',
                  label: 'I feel terrible in the morning and do not know why',
                },
              ]}
            />
          </Form.Item>

          <Button type="primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} htmlType="submit">
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
