import React, { useState } from 'react';
import './header.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { VscAccount } from "react-icons/vsc";
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Layout, Menu, theme } from 'antd';
import SidebarMenu from './sidebar';
import User from "@/public/assets/images/user.jpg";
import Image from 'next/image';
const { Header, Sider, Content } = Layout;

const HeaderMain = (props) => {
  const router = useRouter();
  const [showSignout, setShowSignout] = useState(false);

  const handleClose = () => setShowSignout(false);
  const handleShow = () => setShowSignout(true);
  const SignOut = () => {
    setShowSignout(false);
    router.push("/")
  }
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header className='header-main' >
          <div className='logo-box'>
            <Link className="header-logo" href='/dashboard'>
              Dashboard
            </Link>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className='sidebar-btn'
            />
          </div>
          <div className='header-user-detail w-100'>
            <div><h1>Welcome <span>User</span></h1></div>
            <div onClick={handleShow}>
              <VscAccount />
            </div>
          </div>
          <Modal show={showSignout} onHide={handleClose} className='signout-modal' size="sm">
            <Modal.Body className='d-flex justify-content-center gap-3 align-items-center'>
              <Image src={User} alt='' className='user-img'></Image>
              <div>
                <h3>User Name</h3>
                <h6>Role</h6>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" className='signout-modal-btn' onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" className='signout-modal-btn' onClick={SignOut}>
                Sign Out
              </Button>
            </Modal.Footer>
          </Modal>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} className="main-sidebar">
            <SidebarMenu />
          </Sider>
          <Content
            style={{
              margin: '10px',
              padding: 24,
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              border: "1px solid #0958d9",
            }}
          >
            {props.content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default HeaderMain;