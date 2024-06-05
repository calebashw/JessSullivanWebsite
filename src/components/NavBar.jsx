import React, { useState, useEffect } from 'react';
import {
  DollarOutlined,
  FormOutlined,
  HomeOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <MailOutlined />,
    path: '/contact',
  },
  {
    label: 'Blog',
    key: 'blog',
    icon: <FormOutlined />,
    path: '/blog',
  },
  {
    label: 'Services and Rates',
    key: 'services',
    icon: <DollarOutlined />,
    path: '/services-and-rates',
  },
];

function NavBar() {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const currentItem = items.find((item) => item.path === path);
    if (currentItem) {
      setCurrent(currentItem.key);
    }
  }, [location]);

  const onClick = (e) => {
    setCurrent(e.key);
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.path) {
      navigate(selectedItem.path);
    }
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  );
}

export default NavBar;
