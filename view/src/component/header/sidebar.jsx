import React from 'react'
import { Button, Layout, Menu, theme } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import './header.css';
// Sidebar Menu Start
const sidebarMenuItems = [
    {
      key: 'sub1',
      icon: <MailOutlined />,
      label: (
        <Link href="/dashboard/table">
          Table
        </Link>
      ),
    },
    // {
    //   key: 'sub2',
    //   icon: <AppstoreOutlined />,
    //   label: (
    //     <Link href="/dashboard/navigation-two">
    //       Navigation Two
    //     </Link>
    //   ),
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'sub4',
    //   icon: <SettingOutlined />,
    //   label: 'Navigation Three',
    //   children: [
    //     {
    //       key: '9',
    //       label: (
    //         <Link href="/option-9">
    //           Option 9
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: '10',
    //       label: (
    //         <Link href="/option-10">
    //           Option 10
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: '11',
    //       label: (
    //         <Link href="/option-11">
    //           Option 11
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: '12',
    //       label: (
    //         <Link href="/option-12">
    //           Option 12
    //         </Link>
    //       ),
    //     },
    //   ],
    // },
  ];
  // Sidebar Menu End

const SidebarMenu = () => {
  return (
    <div>
        <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={sidebarMenuItems}
              className='main-sidebar-menu'
            />
    </div>
  )
}

export default SidebarMenu