import React, { useState } from 'react';
import { Layout, Menu, Input, Badge, Drawer, Button, Dropdown } from 'antd';
import { ShoppingCartOutlined, SearchOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";


const { Header } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item key="login">
      <a href="/login">Login</a>
    </Menu.Item>
    <Menu.Item key="register">
      <a href="/register">Register</a>
    </Menu.Item>
  </Menu>
);

function HeaderComponent() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: '0 20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Pharmatve</div>
        <Input placeholder="Search" prefix={<SearchOutlined />} style={{ maxWidth: '300px', marginRight: 'auto', marginLeft: '20px' }} />
        <div className="hidden md:flex">
          <Menu mode="horizontal" className="w-72" style={{ borderBottom: 'none' }}>
            <Menu.Item key="home">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="/about">About</a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="/contact">Contact</a>
            </Menu.Item>
            <Menu.Item key="login">
              <a href="/login">LogIn</a>
            </Menu.Item>
          </Menu>
        </div>
        <div className="flex md:hidden">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
            <Menu mode="vertical">
              <Menu.Item key="home">
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item key="about">
                <a href="/about">About</a>
              </Menu.Item>
              <Menu.Item key="contact">
                <a href="/contact">Contact</a>
              </Menu.Item>
              <Menu.Item key="login">
                <a href="/login">LogIn</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
        <div className="flex items-center">
          <Badge count={2} offset={[10, 0]}>
            <ShoppingCartOutlined style={{ fontSize: '1.5rem', color: '#000' }} />
          </Badge>
          <Dropdown overlay={userMenu} placement="bottomRight">
            <UserOutlined style={{ fontSize: '1.5rem', color: '#000', marginLeft: '20px' }} />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}

export default HeaderComponent;
